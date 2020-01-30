/**
 *	Author: JCloudYu
 *	Create: 2019/12/17
**/
import fs from "fs";
import {PurgeRelativePath, ShiftURLPath} from "jsboost/web/uri-parser.esm.js";

import {BaseError} from "/lib/error.esm.js";
import {HTTPRequestRejectError} from "/kernel/error.esm.js";
import {Config} from "/kernel/config.esm.js";
import {WorkingRoot} from "/kernel-info.esm.js";




export async function Handle(req, res) {
	let targetURL = decodeURIComponent(req.info.url.path||'');
	
	
	
	if ( targetURL[0] !== "/" ) { targetURL = `/${targetURL}`; }
	targetURL = PurgeRelativePath(`${Config.server.script_root}${targetURL}`);
	
	
	
	let matched_path = null, remained_path = '', test_url = targetURL;
	let handler = null;
	while(test_url !== "") {
		// NOTE: Make the url be a full path from document root
		matched_path = test_url;
		if ( matched_path.substr(-1) === "/" ) {
			matched_path = matched_path + 'index';
		}
		
		matched_path += ".mjs";
		
		
		
		// INFO: Test if path exists
		try {
			const state = await (new Promise((resolve, reject)=>{
				fs.stat(WorkingRoot + matched_path, (err, states)=>{
					if ( err ) {
						reject(err);
					}
					else {
						resolve(states);
					}
				});
			}));
			
			if ( !state.isFile() ) {
				const err = new Error("");
				err.code = "ENOENT";
				throw err;
			}
		}
		catch(e) {
			if ( e.code !== "ENOENT" ) { throw e; }
			matched_path = null;
		}
		
		
		// INFO: Obtain script
		if ( matched_path ) {
			({default:handler} = await import(matched_path));
			break;
		}
		
		
		
		const url_parts = ShiftURLPath(test_url);
		test_url = url_parts[0];
		remained_path = url_parts[1] + remained_path;
	}
	
	if ( !handler ) {
		throw new HTTPRequestRejectError(BaseError.RESOURCE_NOT_FOUND);
	}
	
	
	req.info.url.path = remained_path;
	return handler(req, res);
}
