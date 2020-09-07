/**
 * Author: JCloudYu
 * Create Date: 2020/09/08
**/
import {Config} from "/kernel.esm.js";
import {Init as InitDataSource, CleanUp as CleanUpDataSource} from "/lib/data-source.esm.js";


export function Init() {
	logger.log( "Initialize data sources..." );
	return InitDataSource(Config.data_sources);
}
export function CleanUp() {
	logger.log( "Cleanup data sources..." );
	return CleanUpDataSource();
}
