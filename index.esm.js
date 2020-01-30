/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
import http from "http";
import {HTTPCookies} from "jsboost/http-cookies.esm.js";
import {Version} from "jsboost/version.esm.js";
import {ParseURLPathDescriptor, PopURLPath} from "jsboost/web/uri-parser.esm.js"

import {KernelInfo, ProjectInfo} from "/kernel-info.esm.js";
import {HTTPRequestRejectError, SystemError} from "/kernel/error.esm.js";
import {Config} from "/kernel/config.esm.js";
import {BaseError} from "/lib/error/base-error.esm.js";

import {
	Init as InitRequestHandler,
	CleanUp as CleanUpRequestHandler,
	Handle as HandleRequest,
	CanHandleAPI,
	RequestPreprocessor
} from "/handler/_.esm.js";






(async()=>{
	const {server:SERVER_INFO} = Config;
	
	// NOTE: Compare version to prevent incompatible versions between data and project
	const data_version = KernelInfo.version;
	if ( !data_version ) {
		logger.error( `System is not initialized yet!` );
		logger.error( `Please initialize your system via update tool!` );
		setTimeout(()=>process.exit(1));
		return;
	}
	
	const proj_version = ProjectInfo.version;
	if ( Version.From(data_version).compare(proj_version) < 0 ) {
		logger.error( `Data version is older than system version!` );
		logger.error( `Please update your system using update tool!` );
		setTimeout(()=>process.exit(1));
		return;
	}
	
	
	
	// NOTE: Initializing data source environment
	logger.info( "Trying to initialize application runtime environment..." );
	let AppRuntime = null;
	try {
		AppRuntime = await import("/index.runtime.esm.js");
	}
	catch(e) {}
	
	if ( AppRuntime ) {
		if ( AppRuntime.Init ) {
			await AppRuntime.Init();
		}
		
		logger.info( "Application runtime environment initialized!" );
	}
	
	
	
	
	
	
	// NOTE: Initialize api modules
	logger.info( `Initializing request handler...` );
	await InitRequestHandler();
	
	

	// NOTE: Create server
	logger.info( `Creating server instance...` );
	const SERVER = http.createServer((req, res)=>{
		let api, {path, query, fragment} = ParseURLPathDescriptor( req.url||"/" );
		([api, path] = PopURLPath(path));
		
		
		
		// NOTE: Prepare session info and request info
		const req_headers = req.headers;
		const now = Date.now();
		
		req.info = {
			cookies: HTTPCookies.FromRawCookies(req.headers['cookie']||''),
			host: req_headers['x-forwarded-host']||req_headers['host']||null,
			protocol: req_headers['x-forwarded-proto']||'http',
			remote_ip: req_headers['x-real-ip']||req.socket.remoteAddress,
			
			endpoint: api,
			url: { raw:req.url, path, query, fragment },
			time: Math.floor(now/1000),
			time_milli:now
		};
		req.meta = {};
		req.session = {};
		
		
		
		// NOTE: Handle incoming request with corresponding handler
		Promise.resolve()
		.then(async()=>{
			await CanHandleAPI(req, res);
			await RequestPreprocessor(req, res);
			await HandleRequest(req, res);
		})
		.catch((err)=>{
			if ( err instanceof Error ) {
				if ( err instanceof SystemError ) {
					let error_detail = JSON.stringify(err, null, 4).replace(/\r\n/g, '\n').split('\n');
					error_detail = error_detail.map((item, idx)=>(idx===0?item:`${' '.repeat(4)}${item}`)).join('\n');
				
					let error_stack = err.stack.trim().replace(/\r/g, '\n').split('\n');
					error_stack = error_stack.map((item, idx)=>(idx===0?'':`${' '.repeat(8)}${item.trim().substring(3)}`)).join('\n');
					
					logger.error(
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
				
					logger.error(
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
				logger.error( `Unknown error is received!`, err );
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
			logger.error( `Cannot bind server onto ${SERVER_INFO.host}:${SERVER_INFO.port}!` );
			setTimeout(()=>process.emit('SIGNAL_TERMINATION'));
			return;
		}
		
		throw e;
	})
	.on('clientError', (err, socket) => {
		socket.end( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
	});
	
	
	
	// NOTE: Start listening
	logger.info( `Binding server...` );
	SERVER.listen(SERVER_INFO.port, SERVER_INFO.host, ()=>{
		logger.info( `Server is now listening at ${SERVER_INFO.host}:${SERVER_INFO.port}...` );
	});
	
	
	process
	.on( 'SIGNAL_INTERRUPTION', ()=>{})
	.on( 'SIGNAL_TERMINATION', async()=>{
		logger.info( `Cleaning up request handlers...` );
		await CleanUpRequestHandler();
		
		
		
		if ( AppRuntime && AppRuntime.CleanUp ) {
			logger.info( `Cleaning up application runtime environment...` );
			await AppRuntime.CleanUp();
		}
		
		
		
		if ( SERVER.listening ) {
			logger.info( `Terminating server...` );
			SERVER.close();
		}
		
		
		logger.info( `Exiting...` );
		setTimeout(()=>process.exit(1));
	});
})().catch((e)=>setTimeout(()=>{throw e}));
