/**
 * Author: JCloudYu
 * Create Date: 2020/09/08 
**/
import _url from "url";
import qstr from "querystring";
import {ParseContentTypeHeader} from "jsboost/http-headers.esm.js";

import DTSource from "/data-source/source.mongo.esm.js";

import {HTTPRequestRejectError} from "/kernel/error.esm.js";

import {BaseError} from "/lib/error/base-error.esm.js";
import {ReadJSON, WriteJSON} from "/lib/stream-helper.esm.js";
import DefaultData from "/lib/default-data.esm.js";
import {BuildHttpCursor} from "/lib/mongodb-helper.esm.js";


const {URL} = _url;
const ERROR_CODE = {
	ENDPOINT_CANNOT_BE_EMPTY: 'board#empty-endpoint',
	NAME_CANNOT_BE_EMPTY: 'board#empty-name',
	TITLE_CANNOT_BE_EMPTY: 'board#empty-title',
	MESSAGE_CANNOT_BE_EMPTY: 'board#empty-message'
};

export default function(req, res) {
	switch(req.method) {
		case "GET":
			return RetrieveBoardMessage(req, res);
		
		case "POST":
			return LeaveMessage(req, res);
			
		default:
			throw new HTTPRequestRejectError(BaseError.METHOD_NOT_ALLOWED);
	}
}

async function RetrieveBoardMessage(req, res) {
	const {url} = req.info;
	const query = qstr.parse(url.query.substring(1));
	
	const page = (query.p||1)|0;
	const size = (query.ps||10)|0;
	const endpoint = ParseURLPath(query._e||'');
	const db_cursor = DTSource.db.collection('message-board').find({endpoint, revoke_time:0}, {_id:0,endpoint:0,source_ip:0});
	const http_cursor = await BuildHttpCursor(db_cursor, page<=0?1:page, size<=0?10:size);
	
	WriteJSON(res, http_cursor);
}
async function LeaveMessage(req, res) {
	const {value:content_type} = ParseContentTypeHeader(req.headers['content-type']||'');
	if ( content_type !== "application/json" ) {
		throw new HTTPRequestRejectError(BaseError.UNSUPPORTED_MEDIA_TYPE);
	}
	
	const payload = await ReadJSON(req);

	if ( payload !== Object(payload) ) {
		WriteJSON(res, BaseError.INVALID_REQUEST_PAYLOAD, 400);
		return;
	}
	
	
	const {remote_ip} = req.info;
	const name = (''+(payload.name||'')).trim();
	const endpoint = ParseURLPath( (''+(payload.endpoint||'') ).trim());
	const title = (''+(payload.title||'')).trim();
	const message = (''+(payload.message||'')).trim();
	const errors = [];
	
	if ( !endpoint ) { errors.push(ERROR_CODE.ENDPOINT_CANNOT_BE_EMPTY); }
	if ( !title ) { errors.push(ERROR_CODE.TITLE_CANNOT_BE_EMPTY); }
	if ( !message ) { errors.push(ERROR_CODE.MESSAGE_CANNOT_BE_EMPTY); }
	if ( !name ) { errors.push(ERROR_CODE.NAME_CANNOT_BE_EMPTY); }
	console.log(errors);
	if ( errors.length > 0 ) {
		WriteJSON(res, Object.assign({details:errors},BaseError.INVALID_REQUEST_PAYLOAD), 400);
		return;
	}
	
	
	
	
	const new_msg = DefaultData.MessageBoardMessage;
	new_msg.endpoint = endpoint;
	new_msg.nick_name = name;
	new_msg.title = title;
	new_msg.message = message;
	new_msg.source_ip = remote_ip;
	const result = await DTSource.db.collection('message-board').insertOne(new_msg);
	if ( result.insertedCount !== 1 ) {
		WriteJSON(res, BaseError.UNEXPECTED_DB_FAILURE, 400);
		return;
	}
	
	
	
	const {_id:_1, source_ip, ...msg_data} = new_msg;
	WriteJSON(res, msg_data);
}


function ParseURLPath(path) {
	try {
		if ( path[0] !== "/" ) return '';
		
		return (new URL(path, "http://127.0.0.1")).pathname;
	} catch(e) { return ''; }
}
