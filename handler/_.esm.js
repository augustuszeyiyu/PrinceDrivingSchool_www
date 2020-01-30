/**
 *	Author: JCloudYu
 *	Create: 2019/07/16
**/
import {Config} from "/kernel/config.esm.js";

import {Handle as HandleTmplScriptingViewRequest} from "./tmpl-scripting-view.esm.js";
import {Handle as HandleStaticViewRequest} from "./static-view.esm.js";



export async function Init() {}
export async function CleanUp() {}
export function CanHandleAPI(req, res) {}
export function RequestPreprocessor(req, res) {}
export function Handle(req, res) {
	const {endpoint, url} = req.info;
	url.path = endpoint + url.path;
	
	if ( Config.server.routes.indexOf(endpoint) >= 0 ) {
		return HandleStaticViewRequest(req, res);
	}
	else {
		return HandleTmplScriptingViewRequest(req, res);
	}
}
