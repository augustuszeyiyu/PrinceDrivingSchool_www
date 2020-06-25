/**
 *	Author: JCloudYu
 *	Create: 2020/06/25
**/
const PRIVATE = new WeakMap();
const TrapHandler = {
	getPrototypeOf: (target)=>{
		return target.constructor.prototype;
	},
	get: (target, prop)=>{
		switch(prop) {
			case "watch":
				return PRIVATE.get(target).watch;
			case "unwatch":
				return PRIVATE.get(target).unwatch;
			default:
				return target[prop];
		}
	},
	set: (target, prop, value)=>{
		const old_value = target[prop];
		target[prop] = value;
		
		const {watch_map} = PRIVATE.get(target);
		const handler_list = watch_map[prop];
		if ( !handler_list || handler_list.length === 0 ) return;
		
		
		for(const handler of handler_list) {
			handler.call(target, prop, value, old_value);
		}
		
		return true;
	},
	deleteProperty: (target, prop)=>{
		const old_value = target[prop];
		delete target[prop];
		
		const {watch_map} = PRIVATE.get(target);
		const handler_list = watch_map[prop];
		if ( !handler_list || handler_list.length === 0 ) return true;
		
		
		
		for(const handler of handler_list) {
			handler.call(target, prop, undefined, old_value);
		}
		return true;
	}
};

export function Watchable(object){
	if ( arguments.length === 0 ) object = {};

	if ( Object(object) !== object ) {
		throw new TypeError("Given argument must be an object!");
	}
	
	const _Watchable = Object.create(null);
	_Watchable.watch_map = Object.create(null);
	_Watchable.watch = WATCH.bind(object);
	_Watchable.unwatch = UNWATCH.bind(object);
	
	PRIVATE.set(object, _Watchable);
	return new Proxy(object, TrapHandler);
}
function WATCH(prop, handler) {
	const {watch_map} = PRIVATE.get(this);
	const list = watch_map[prop] = watch_map[prop]||[];
	if ( list.indexOf(handler) >= 0 ) return;
	
	list.push(handler);
}
function UNWATCH(prop, handler) {
	const {watch_map} = PRIVATE.get(this);
	const list = watch_map[prop] = watch_map[prop]||[];
	const pos = list.indexOf(handler);
	if ( pos < 0 ) return;
	
	list.splice(pos, 1);
}
