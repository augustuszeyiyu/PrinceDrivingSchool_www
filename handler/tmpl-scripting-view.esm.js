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



const script_root = '/root';
export async function Handle(req, res) {	

	const target_url  = PurgeRelativePath(decodeURIComponent(req.info.url.path||''));
	console.log('tmp-script-view.esm.js > Handle > 1 ', {info_url_path: req.info.url.path, script_root, target_url});
	

	
	let matched_path = null, matched_path_dir = '', remained_path = '', candidate_base = target_url;
	while(candidate_base !== "") {
		const [left_over, comp] = ShiftURLPath(candidate_base);
		candidate_base = left_over;
		
		
	




		
		const candidates = [comp, '/index'];
		
		console.log('tmp-script-view.esm.js > Handle > 2 ', {left_over, candidate_base, candidates});

		
		// Search for scripts
		for ( let index=0; index<candidates.length; index++ ) {
			const candidate = candidates[index];
			if ( candidate === "/" || "" )  continue;
		
			try {
				const candidate_path = candidate_base + candidate + '.mjs';
				const test_path = WorkingRoot + script_root + candidate_path;			


				console.log('tmp-script-view.esm.js > Handle > 3 ', {candidate_path, test_path});


				const stat = fs.statSync(test_path);

				console.log('tmp-script-view.esm.js > Handle > 4 ', {candidate_path, test_path, stat: stat.isFile()});


				if ( !stat.isFile() ) continue;
				
				matched_path = script_root + candidate_path;
				matched_path_dir = script_root + candidate_base;

				console.log('tmp-script-view.esm.js > Handle > 5 ', {index, matched_path, matched_path_dir});

				if ( index > 0 ) {
					remained_path = candidates[0] + remained_path;
					console.log('tmp-script-view.esm.js > Handle > 6 ', {index, remained_path});
				}
				break;
			}
			catch(e) { 
				// req.info.url.path = '/index'
				// return Handle(req, res);



				console.log('tmpl-script.......', {info_url_path :req.info.url.path});
				
				
				continue; 
			}
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
	
	console.log('tmp-script-view.esm.js > Handle > 7 ', {path: req.info.url.path, script_path: req.info.url.script_path, script_dir: req.info.url.script_dir});
	
	const {default:handler} = await import(matched_path);
	if ( typeof handler !== "function" ) {
		throw new HTTPRequestRejectError(BaseError.UNEXPECTED_SERVER_ERROR);
	}
	
	return handler(req, res);
}
