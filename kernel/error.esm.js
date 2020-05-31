/**
 *	Author: JCloudYu
 *	Create: 2019/07/16
**/
export class BuiltInError extends Error {
	constructor(error_info, detail=null, ...args) {
		if ( Object(error_info) !== error_info ) {
			throw new TypeError("IndexedError constructor accepts only objects!");
		}
	
		const {code:__code=null, key, message=null, msg=null} = error_info;
		if ( typeof key !== "string" ) {
			throw new TypeError("Input `key` field field must be a string!");
		}
		
		
		let _code = __code;
		if ( _code !== null ) {
			if ( typeof _code !== "number" ) {
				throw new TypeError("Given `code` field must be a number!");
			}
			
			_code = parseInt(_code);
		}
		const code = _code;
		
		
		if (message !== null) {
			args.unshift(''+message);
		}
		else
		if (msg !== null) {
			args.unshift(''+msg);
		}
		else {
			args.unshift('');
		}
		
		
		super(...args);
		
		if ( Error.captureStackTrace ) {
			Error.captureStackTrace(this, this.constructor);
		}
		
		
		
		const now = Date.now();
		Object.defineProperties(this, {
			code:{
				configurable:false, writable:false, enumerable:false,
				value:code
			},
			key:{
				configurable:false, writable:false, enumerable:false,
				value:key
			},
			detail: {
				configurable:false, writable:false, enumerable:false,
				value:detail
			},
			name: {
				configurable:false, writable:false, enumerable:false,
				value:this.constructor.name
			},
			time: {
				configurable:false, writable:false, enumerable:false,
				value:Math.floor(now/1000)
			},
			time_milli: {
				configurable:false, writable:false, enumerable:false,
				value:now
			}
		});
	}
	toJSON() {
		const result = {
			code:this.code,
			key:this.key,
			msg:this.message,
			detail:undefined,
			time:this.time,
			time_milli:this.time_milli
		};
		
		if ( this.code === null ) {
			delete result.code;
		}
		
		if ( this.detail !== null && this.detail !== undefined ) {
			if ( Array.isArray(this.detail) ) {
				result.detail = this.detail.slice(0);
			}
			else
			if ( Object(this.detail) === this.detail ) {
				result.detail = Object.assign({}, this.detail);
			}
			else {
				result.detail = this.detail;
			}
		}
		
		return result;
	}
}

export class HTTPRequestRejectError extends BuiltInError {
	constructor(info_obj, detail=null, ...args) {
		const {status:__status=null, headers={}, ...inits} = info_obj;
		super(inits, detail, ...args);
		
		
		let _status = __status;
		if ( _status !== null ) {
			if ( typeof _status !== "number" || _status >= 1000 ) {
				throw new TypeError("Given status field must be a number lower than 1000");
			}
			
			_status = parseInt(_status);
		}
		const status = _status;
		
		if ( status === null && this.code === null ) {
			throw new Error("HTTPRequestRejectError requires `status` field or `code` field to resolve http status!");
		}
		
		
		Object.defineProperties(this, {
			status: {
				configurable:false, writable:false, enumerable:false,
				value:status
			},
			headers: {
				configurable:false, writable:false, enumerable:false,
				value:Object.assign({}, headers)
			}
		});
	}
	get httpStatus() {
		if ( this.status !== null ) {
			return this.status;
		}
		
		if ( this.code !== null ) {
			return ((this.code/1000)|0)%1000;
		}
		
		throw new Error("Unexpected HTTPRequestRejectError when resolving http status!");
	}
}
export class SystemError extends BuiltInError {
	constructor(...args) { super(...args); }
}



