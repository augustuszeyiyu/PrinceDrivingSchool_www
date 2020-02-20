/**
 *	Author: JCloudYu
 *	Create: 2019/12/17
**/
import fs from "fs";
import {PurgeRelativePath, ShiftURLPath} from "jsboost/web/uri-parser.esm.js";

import {BaseError} from "/lib/error/base-error.esm.js";
import {HTTPRequestRejectError} from "/kernel/error.esm.js";
import {Config} from "/kernel/config.esm.js";
import {WorkingRoot} from "/kernel-info.esm.js";




export async function Handle(req, res) {
	const script_root = PurgeRelativePath(Config.server.script_root);
	const target_url  = PurgeRelativePath(decodeURIComponent(req.info.url.path||''));
	
	let matched_path = null, matched_path_dir = '', remained_path = '', candidate_base = target_url;
	while(candidate_base !== "") {
		const [left_over, comp] = ShiftURLPath(candidate_base);
		candidate_base = left_over;
		
		
	
		const candidates = [comp, '/index'];
		
		
		
		// Search for scripts
		for ( let index=0; index<candidates.length; index++ ) {
			const candidate = candidates[index];
			if ( candidate === "/" || "" )  continue;
		
			try {
				const candidate_path = candidate_base + candidate + '.mjs';
				const test_path = WorkingRoot + script_root + candidate_path;
				const stat = fs.statSync(test_path);
				if ( !stat.isFile() ) continue;
				
				matched_path = script_root + candidate_path;
				matched_path_dir = script_root + candidate_base;
				if ( index > 0 ) {
					remained_path = candidates[0] + remained_path;
				}
				break;
			}
			catch(e) { continue; }
		}
		
		// Obtain module
		if ( matched_path ) break;
		
		
		
		remained_path = comp + remained_path;
	}
	
	if ( !matched_path ) {
		throw new HTTPRequestRejectError(BaseError.RESOURCE_NOT_FOUND);
	}
	
	req.info.url.path		 = remained_path;
	req.info.url.script_path = matched_path;
	req.info.url.script_dir	 = matched_path_dir;
	
	
	const {default:handler} = await import(script_root + matched_path);
	if ( typeof handler !== "function" ) {
		throw new HTTPRequestRejectError(BaseError.UNEXPECTED_SERVER_ERROR);
	}
	
	return handler(req, res);
}
