/**
 *	Author: JCloudYu
 *	Create: 2020/01/31
**/

const DESCRIPTOR_LINK = new WeakMap();

const KEY_FORMAT = /^([?!]?)([a-zA-Z0-9_-]+)$/;
export function BuildTemplate(template) {
	if ( !(template instanceof String.stringTemplate) ) {
		return null;
	}
	
	
	
	const key_descriptors = [];
	const keys = [];
	for(const dynamic of template.fields) {
		if ( typeof dynamic !== "string" || dynamic === '' ) {
			key_descriptors.push({
				is_key: false, content:dynamic
			});
			continue;
		}
		
		
		
		const matches = dynamic.match(KEY_FORMAT);
		if ( !matches ) {
			throw new SyntaxError("Template field's key name contains invalid characters! (/^[?!]?[a-zA-Z0-9_-]+$/)");
		}
		
		const [, flag, key] = matches;
		keys.push(key);
		key_descriptors.push({
			is_key:true, key, state: (flag === "!" ? 2 : (flag === "?" ? 0 : 1)),
		});
	}
	
	DESCRIPTOR_LINK.set(template, {descriptors:key_descriptors});
	
	
	
	const inst = function(param_map) {
		return new HTMLNamedTmplMap(template, param_map);
	};
	
	inst.keys = keys.unique();
	return inst;
}

class HTMLNamedTmplMap {
	constructor(base_tmpl, param_map) {
		Object.defineProperties(this, {
			tmpl: {value:base_tmpl, configurable:true, writable:true, enumerable:false},
			params: {value:param_map, configurable:true, writable:true, enumerable:false}
		});
	}
	render(renderer=null) {
		if ( typeof renderer === "function" ) {
			return RenderTmplMapCB.call(this, renderer);
		}
		
		return RenderTmplMapString.call(this);
	}
}

async function RenderTmplMapCB(cb) {
	const {descriptors} = DESCRIPTOR_LINK.get(this.tmpl);
	const {tmpl:{strings}, params:param_map} = this;
	
	
	
	for( let i=0; i<strings.length; i++ ) {
		let field_value = '';
		if ( i > 0 ) {
			const {is_key, state, key, content} = descriptors[i-1];
			if ( is_key ) {
				field_value = param_map[key];
				if ( field_value === undefined ) {
					if ( state === 2 ) {
						throw new RangeError(`Missing required key \`${key}\`!`);
					}
					else
					if ( state === 1 ) {
						console.warn( `Missing key \`${key}\`!` );
					}
				}
			}
			else {
				field_value = content;
			}
		}
		
		
		if ( field_value !== undefined ) {
			await RenderItemCB(this.params, field_value, cb);
		}
		
		await cb( strings[i] );
	}
}
async function RenderTmplMapString() {
	const {descriptors} = DESCRIPTOR_LINK.get(this.tmpl);
	const {tmpl:{strings}, params:param_map} = this;
	
	

	let str = '';
	for( let i=0; i<strings.length; i++ ) {
		let field_value = '';
		if ( i > 0 ) {
			const {is_key, state, key, content} = descriptors[i-1];
			if ( is_key ) {
				field_value = param_map[key];
				if ( field_value === undefined ) {
					if ( state === 2 ) {
						throw new RangeError(`Missing required key \`${key}\`!`);
					}
					else
					if ( state === 1 ) {
						console.warn( `Missing key \`${key}\`!` );
					}
				}
			}
			else {
				field_value = content;
			}
		}
		
		if ( field_value !== undefined ) {
			str += await RenderItemString(field_value);
		}
		
		str += strings[i];
	}
	
	return str;
}

async function RenderItemCB(params, item, cb) {
	if ( typeof item === "function" ) {
		item = item(params);
	}
	
	
	
	if ( item instanceof Promise ) {
		item = await item;
	}
	
	
	
	if ( item instanceof String.stringTemplate ) {
		for(let part of item) {
			await RenderItemCB(params, part, cb);
		}
	}
	else
	if ( item instanceof HTMLNamedTmplMap ) {
		await item.render(cb);
	}
	else {
		await cb('' + item);
	}
}
async function RenderItemString(item) {
	let collect = '';
	if ( item instanceof Promise ) {
		item = await item;
	}
	
	if ( item instanceof String.stringTemplate ) {
		for(let part of item) {
			collect += await RenderItemString(part);
		}
	}
	else
	if ( item instanceof HTMLNamedTmplMap ) {
		collect += await item.render();
	}
	else {
		collect += '' + item;
	}
	
	return collect;
}

