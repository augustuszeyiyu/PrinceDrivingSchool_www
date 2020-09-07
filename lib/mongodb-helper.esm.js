/**
 *	Author: JCloudYu
 *	Create: 2020/02/11
**/
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
