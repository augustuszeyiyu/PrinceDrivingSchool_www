/**
 *	Author: JCloudYu
 *	Create: 2019/09/08
**/
import path from "path";
import fs from "fs";
import {PurgeRelativePath} from "jsboost/web/uri-parser.esm.js";

import {MIME_MAP} from "/lib/mime-map.esm.js";
import {BaseError} from "/lib/error/base-error.esm.js";
import {Config} from "/kernel/config.esm.js";
import {HTTPRequestRejectError} from "/kernel/error.esm.js";
import {WorkingRoot} from "/kernel-info.esm.js";


const view_root = '/root'
export async function Handle(req, res) {
	let targetURL = decodeURIComponent(req.info.url.path||'');
	
	console.log('static-view.esm.js > Handle > 1 ', {targetURL});
	
	if ( targetURL[0] !== "/" ) { targetURL = `/${targetURL}`; }
	
	// NOTE: If the path is a directory ( ended with a forward slash )
	if ( targetURL.substr(-1) === '/' ) { targetURL += 'index.html'; }

	console.log('static-view.esm.js > Handle > 2 ', {targetURL});
	
	// NOTE: Resolve path to absolute path ( Purge relative paths such as .. and . )
	// NOTE: This prevents unexpected /../a/b/c condition which will access out of document root
	// NOTE: Theoretically, this condition will also not occur in most cases
	// NOTE: Browsers and CURL will not allow this to happen...
	targetURL = PurgeRelativePath(`${view_root}${targetURL}`);
	
	console.log('static-view.esm.js > Handle > 3 ', {targetURL});
	
	// NOTE: Make the url be a full path from document root
	targetURL = path.resolve(WorkingRoot, targetURL.substring(1));
	
	console.log('static-view.esm.js > Handle > 4 ', {targetURL});
	
	// NOTE: Directory request prevention
	try {
		const stat = fs.statSync(targetURL);
		if ( stat.isDirectory() ){
			throw new HTTPRequestRejectError(BaseError.FORBIDDEN_ACCESS);
		}
	}
	catch(e) {
		if ( e !== 403 ) {
			throw new HTTPRequestRejectError(BaseError.RESOURCE_NOT_FOUND);
		}
		
		throw e;
	}
	
	
	
	// NOTE: Detect MIME and respond with corresponding mime type
	let period_pos = targetURL.lastIndexOf('.');
	let ext = (period_pos > 0) ? targetURL.substring(period_pos+1) : '';
	let contentType = MIME_MAP[ext] || 'application/octet-stream';
	res.writeHead(200, { 'Content-Type': contentType });
	
	
	
	let readStream = fs.createReadStream(targetURL);



	await new Promise((resolve, reject)=>{
		readStream
		.on('end', resolve)
		.on('error', reject)
		.pipe(res);
	});
}
