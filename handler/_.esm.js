/**
 *	Author: JCloudYu
 *	Create: 2019/07/16
**/
import {HTTPRequestRejectError} from "/kernel/error.esm.js";
import {BaseError} from "/lib/error/base-error.esm.js";

import * as VersionAPI from "./version.esm.js";



const APIHandlers = {
	version: VersionAPI
};



export async function Init() {
	const promises = [];
	for(const handler of Object.values(APIHandlers)) {
		if ( handler.Init ) {
			promises.push(handler.Init());
		}
	}
	await Promise.wait(promises);
}
export async function CleanUp() {
	const promises = [];
	for(const handler of Object.values(APIHandlers)) {
		if ( handler.CleanUp ) {
			promises.push(handler.CleanUp());
		}
	}
	await Promise.wait(promises);
}
export function CanHandleAPI(req, res) {
	const {endpoint:api} = req.info;

	// NOTE: Detect api handler
	const api_module = APIHandlers[api.substring(1).toLowerCase()];
	if ( !api_module ) {
		throw new HTTPRequestRejectError(BaseError.RESOURCE_NOT_FOUND);
	}
}
export function RequestPreprocessor(req, res) {}
export function Handle(req, res) {
	const {endpoint:api} = req.info;
	const api_module = APIHandlers[api.substring(1).toLowerCase()];
	return api_module.Handle(req, res);
}
