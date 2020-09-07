/**
 * Author: JCloudYu
 * Create Date: 2020/09/08
**/
import DTSource from "/data-source/source.mongo.esm.js";

export async function Update(prev_version, logger) {
	// This script is purposed to do nothing...
	logger.log("Basic system initialization...");
	
	logger.log("Adding hashed index to `message-board`.`id`...");
	await DTSource.db.collection('message-board').createIndex({id:'hashed'}, {name:'hash#id'});
	
	logger.log("Adding ascending index to `message-board`.`id`...");
	await DTSource.db.collection('message-board').createIndex({id:1}, {name:'asc#id'});
	
	logger.log("Adding hashed index to `message-board`.`endpoint`...");
	await DTSource.db.collection('message-board').createIndex({endpoint:'hashed'}, {name:'hashed#endpoint'});
	
	logger.log("Adding ascending index to `message-board`.`revoke_time`...");
	await DTSource.db.collection('message-board').createIndex({revoke_time:1}, {name:'hashed#revoke_time'});
	
	logger.log("Adding descending index to `create_time`.`create_time`...");
	await DTSource.db.collection('message-board').createIndex({create_time:-1}, {name:'desc#create_time'});
}
