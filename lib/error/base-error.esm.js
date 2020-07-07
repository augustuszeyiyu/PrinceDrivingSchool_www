/**
 *	Author: JCloudYu
 *	Create: 2020/01/29
**/
export const BaseError = Object.freeze({
	// 400
	BAD_REQUEST: Object.freeze({
		status:400, key:'base#bad-request',
		message:'Request payload contains invalid information'
	}),
	INVALID_REQUEST_HEADERS: Object.freeze({
		status:400, key:'base#invalid-request-headers',
		message:'Provided request headers are invalid'
	}),
	INVALID_REQUEST_PAYLOAD: Object.freeze({
		status:400, key:'base#invalid-request-payload',
		message:'Provided payload is invalid'
	}),
	
	// 401
	UNAUTHORIZED_ACCESS: Object.freeze({
		status:401, key:'base#unauthorized',
		message:'Authorization is required to access this resource'
	}),
	
	// 403
	FORBIDDEN_ACCESS: Object.freeze({
		status:403, key:'base#forbidden',
		message:"You're not allowed to access this resource"
	}),
	
	//404
	RESOURCE_NOT_FOUND: Object.freeze({
		status:404, key:'base#res-not-found',
		message:'Requested resource cannot be found'
	}),
	
	// 405
	METHOD_NOT_ALLOWED: Object.freeze({
		status:405, key:'base#method-not-allowed',
		message:'Requesting method is not supported by the resource'
	}),
	
	// 413
	REQUEST_PAYLOAD_IS_TOO_LARGE: Object.freeze({
		status:413, key:'base#payload-is-too-large',
		message:'Request body payload is too large'
	}),
	
	// 415
	UNSUPPORTED_MEDIA_TYPE: Object.freeze({
		status:415, key:'base#unsupported-media-type',
		message:'Unsupported requesting media type'
	}),
	
	// 500
	UNEXPECTED_SERVER_ERROR: Object.freeze({
		status:500, key:'base#unexpected-error',
		message:'Unexpected error has occurred'
	}),
	UNEXPECTED_DB_FAILURE: Object.freeze({
		status:500, key:'base#unexpected-db-failure',
		message:'Unexpected database failure has occurred'
	})
});


