/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
import http from "http";
import {HTTPCookies} from "jsboost/http-cookies.esm.js";
import {Version} from "jsboost/version.esm.js";
import {ParseURLPathDescriptor, PopURLPath} from "jsboost/web/uri-parser.esm.js"

import {KernelInfo} from "/kernel-info.esm.js";
import {HTTPRequestRejectError, SystemError} from "/kernel/error.esm.js";
import {ProjectConfig, Config} from "/kernel/config.esm.js";
import {BaseError} from "/lib/error/base-error.esm.js";

import {default as Handlers, RequestPreprocessor} from "/handler/_.esm.js";






(async()=>{
	const {server:SERVER_INFO} = Config;
	
	// NOTE: Compare version to prevent incompatible versions between data and project
	const data_version = KernelInfo.version;
	if ( !data_version ) {
		console.error( `System is not initialized yet!` );
		console.error( `Please initialize your system via update tool!` );
		setTimeout(()=>process.exit(1));
		return;
	}
	
	const proj_version = ProjectConfig.version;
	if ( Version.From(data_version).compare(proj_version) < 0 ) {
		console.error( `Data version is older than system version!` );
		console.error( `Please update your system using update tool!` );
		setTimeout(()=>process.exit(1));
		return;
	}
	
	
	
	// NOTE: Initializing data source environment
	console.info( "Trying to initialize application runtime environment..." );
	let AppRuntime = null;
	try {
		AppRuntime = await import("/index.runtime.esm.js");
	}
	catch(e) {}
	
	if ( AppRuntime ) {
		if ( AppRuntime.Init ) {
			await AppRuntime.Init();
		}
		
		console.info( "Application runtime environment initialized!" );
	}
	
	
	
	
	
	
	// NOTE: Initialize api modules
	console.info( `Initializing api handlers...` );
	let promises = [];
	for (const Handler of Object.values(Handlers)) {
		if ( !Handler.Init ) continue;
		promises.push(Handler.Init());
	}
	await Promise.wait(promises);
	
	

	// NOTE: Create server
	console.info( `Creating server instance...` );
	const SERVER = http.createServer((req, res)=>{
		let api, {path, query, fragment} = ParseURLPathDescriptor( req.url||"/" );
		([api, path] = PopURLPath(path));
		
		// NOTE: Detect api handler
		const api_module = Handlers[api.substring(1).toLowerCase()];
		if ( !api_module ) {
			const error = new HTTPRequestRejectError(BaseError.RESOURCE_NOT_FOUND);
			res.writeHead(error.httpStatus, {"Content-Type": "application/json"});
			res.end(JSON.stringify(error));
			return;
		}
		
		
		
		// NOTE: Prepare session info and request info
		const req_headers = req.headers;
		const now = Date.now();
		const meta = req.meta = {};
		req.info = {
			cookies: HTTPCookies.FromRawCookies(req.headers['cookie']||''),
			host: req_headers['x-forwarded-host']||req_headers['host']||null,
			protocol: req_headers['x-forwarded-proto']||'http',
			remote_ip: req_headers['x-real-ip']||req.socket.remoteAddress,
			meta,
			
			url: { raw:req.url, path, query, fragment },
			time: Math.floor(now/1000),
			time_milli:now
		};
		req.session = {};
		
		
		
		// NOTE: Handle incoming request with corresponding handler
		Promise.resolve()
		.then(RequestPreprocessor)
		.then(()=>api_module.Handle(req, res))
		.catch((err)=>{
			if ( err instanceof Error ) {
				if ( err instanceof SystemError ) {
					let error_detail = JSON.stringify(err, null, 4).replace(/\r\n/g, '\n').split('\n');
					error_detail = error_detail.map((item, idx)=>(idx===0?item:`${' '.repeat(4)}${item}`)).join('\n');
				
					let error_stack = err.stack.trim().replace(/\r/g, '\n').split('\n');
					error_stack = error_stack.map((item, idx)=>(idx===0?'':`${' '.repeat(8)}${item.trim().substring(3)}`)).join('\n');
					
					console.error(
						'Unexpected system error has occurred!',
						`    Error: ${err.message}`,
						`    Detail: ${error_detail}`,
						`    Stack: {${error_stack}\n${' '.repeat(4)}}`
					);
				
					err = new HTTPRequestRejectError(BaseError.UNEXPECTED_SERVER_ERROR);
				}
				else
				if ( !(err instanceof HTTPRequestRejectError) ) {
					let error_stack = err.stack.trim().replace(/\r/g, '\n').split('\n');
					error_stack = error_stack.map((item, idx)=>(idx===0?'':`${' '.repeat(8)}${item.trim().substring(3)}`)).join('\n');
				
					console.error(
						`Unhandled rejection is received!`,
						`    Error: ${err.message}`,
						`    Stack: {${error_stack}\n${' '.repeat(4)}}`
					);
					
					err = new HTTPRequestRejectError(BaseError.UNEXPECTED_SERVER_ERROR, {
						message: err.message,
						stack: err.stack.split('\n')
					});
				}
			}
			else {
				console.error( `Unknown error is received!`, err );
				err = new HTTPRequestRejectError(BaseError.UNEXPECTED_SERVER_ERROR, err);
			}
			
			
			
			if ( res.finished ) return;
			
			const headers = Object.assign({}, err.headers||{}, {"Content-Type":"application/json"});
			res.writeHead(err.httpStatus, headers);
			res.end(JSON.stringify(err));
		})
		.finally(async()=>{
			if ( req.readable ) {
				await ((input_stream)=>new Promise((resolve, reject)=>{
					input_stream.on('end', resolve).on('error',reject).on('data',()=>{});
				}))(req);
			}
		
			if ( !(res.writableFinished||res.finished) ) {
				res.end();
			}
		});
	})
	.on('error', (e) => {
		if (e.code === 'EADDRINUSE') {
			SERVER.close();
			console.error( `Cannot bind server onto ${SERVER_INFO.host}:${SERVER_INFO.port}!` );
			setTimeout(()=>process.emit('SIGNAL_TERMINATION'));
			return;
		}
		
		throw e;
	})
	.on('clientError', (err, socket) => {
		socket.end( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
	});
	
	
	
	// NOTE: Start listening
	console.info( `Binding server...` );
	SERVER.listen(SERVER_INFO.port, SERVER_INFO.host, ()=>{
		console.info( `Server is now listening at ${SERVER_INFO.host}:${SERVER_INFO.port}...` );
	});
	
	
	process
	.on( 'SIGNAL_INTERRUPTION', ()=>{})
	.on( 'SIGNAL_TERMINATION', async()=>{
		console.info( `Cleaning up api handlers...` );
		let promises = [];
		for (const Handler of Object.values(Handlers)) {
			if ( !Handler.CleanUp ) continue;
			promises.push(Handler.CleanUp());
		}
		await Promise.wait(promises);
		
		
		
		if ( AppRuntime && AppRuntime.CleanUp ) {
			console.info( `Cleaning up application runtime environment...` );
			await AppRuntime.CleanUp();
		}
		
		
		
		if ( SERVER.listening ) {
			console.info( `Terminating server...` );
			SERVER.close();
		}
		
		
		console.info( `Exiting...` );
		setTimeout(()=>process.exit(1));
	});
})().catch((e)=>setTimeout(()=>{throw e}));
