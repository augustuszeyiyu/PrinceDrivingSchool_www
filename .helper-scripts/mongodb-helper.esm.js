/**
 *	Author: JCloudYu
 *	Create: 2020/02/11
**/
export function BuildFieldPickingMap(inputs) {
	const map = {};
	if ( typeof inputs === "string" ) {
		inputs = inputs.split(',').map((item)=>item.trim());
	}
	
	if ( Array.isArray(inputs) ) {
		for(const input_key of inputs) {
			let key=input_key, exclude=false;
			if ( key[0] === "+" ) {
				key = key.substring(1);
				exclude = false;
			}
			else
			if ( key[0] === "-") {
				key = key.substring(1);
				exclude = true;
			}
			
			map[key] = exclude?0:1
		}
	}
	else
	if ( Object(inputs) === inputs ) {
		for ( const key of Object.keys(inputs) ) {
			map[key] = !!inputs[key];
		}
	}
	
	return map;
}
export async function BuildHttpCursor(cursor, page=1, page_size=-1, map_func=null) {
	page = page < 1 ? 1 : page;
	
	const count = await cursor.count(false);
	const result_cursor = {
		records: null,
		meta: {
			page,
			page_size: undefined,
			total_pages: undefined,
			total_records:count
		}
	};
	
	
	if ( page_size >= 1 ) {
		result_cursor.meta.page_size = page_size;
		result_cursor.meta.total_pages = Math.max(Math.ceil(count/page_size), 1);
		if ( !map_func ) {
			result_cursor.records = await cursor.skip((page-1)*page_size).limit(page_size).toArray();
		}
		else {
			result_cursor.records = [];
			await cursor.skip((page-1)*page_size).limit(page_size).forEach(function(doc){
				result_cursor.records.push(map_func(doc));
			});
		}
	}
	else {
		if ( !map_func ) {
			result_cursor.records = await cursor.toArray();
		}
		else {
			result_cursor.records = [];
			await cursor.forEach(function(doc){
				result_cursor.records.push(map_func(doc));
			});
		}
	}
	
	return result_cursor;
}

export async function Aggregate(collection, stages=[]) {
	return collection.aggregate(stages)
}
export async function InsertRecord(collection, record, options={}) {
	const multiple = Array.isArray(record);
	
	if ( multiple ) {
		const result = await collection.insertMany(record, options);
		return result.insertedCount > 0 ? result.insertedIds : false;
	}
	else {
		const result = await collection.insertOne(record, options);
		return result.insertedCount > 0 ? result.insertedId : false;
	}
}
export async function QueryAndAllocate(collection, query, update_op, options={}) {
	const {multiple, upsert, ...dbOptions} = options;
	const args = [query, update_op, dbOptions];
	dbOptions.upsert = true;
	
	const result = await collection.updateOne(...args);
	return result.upsertedCount > 0 ? result.upsertedId : false;
}
export function QueryList(collection, query, projection={_id:0}, options={}) {
	options.projection = BuildFieldPickingMap(projection);
	return collection.find(query, options);
}
export async function QueryAndUpdate(collection, query, update_op, options={multiple:false}) {
	const {multiple, upsert, ...dbOptions} = options;
	const args = [query, update_op, dbOptions];
	
	const result = await (multiple ? collection.updateMany(...args) : collection.updateOne(...args));
	return result.matchedCount > 0 ? result : false;
}
export async function QueryAndDelete(collection, query, options={multiple:false}) {
	const {multiple, ...dbOptions} = options;
	const args = [query, dbOptions];
	
	const result = await (multiple ? collection.deleteMany(...args) : collection.deleteOne(...args));
	return result.matchedCount > 0 ? result : false;
}
