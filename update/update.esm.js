/**
 *	Author: JCloudYu
 *	Create: 2019/06/26
**/
import fs from "fs";
import path from "path";
import {Version} from "jsboost/version.esm.js";

import {KernelInfo, IsWindowsEnv} from "/kernel-info.esm.js";



(async()=>{
	const __dirname = path.dirname((import.meta.url).substring(IsWindowsEnv ? 8 : 7));
	
	
	let UpdateRuntime = null;
	console.info( "Trying to initialize update runtime environment..." );
	try {
		UpdateRuntime = await import("./update.runtime.esm.js");
	}
	catch(e) {}
	
	if ( UpdateRuntime ) {
		if ( UpdateRuntime.Init ) {
			await UpdateRuntime.Init();
		}
		
		console.info( "Application runtime environment initialized!" );
	}
	
	
	
	// NOTE: Query the system version
	let system_version = KernelInfo.version;
	if ( !system_version ) {
		system_version = KernelInfo.version = "0.0.0";
		await KernelInfo.save();
	}
	
	
 	// NOTE: Fetch update files
 	const content_list = fs.readdirSync(`${__dirname}/updates`);
 	const versions = [];
 	for( const item of content_list ) {
 		if ( item === "." || item === ".." || item.substr(-7) !== ".esm.js" ) continue;
 		const version = Version.From(item.substring(0, item.length-7));
 		if ( !version ) continue;
 		
 		versions.push(version);
 	}
 	versions.sort((a, b)=>{return a.compare(b);});
 	
 	
 	
 	// NOTE: Run update
 	const start_version = system_version;
 	for( const version of versions ) {
 		if ( version.compare(system_version) <= 0 ) continue;
 		console.log( `Updating to ${version._raw}...` );
 		const {Update} = await import( `./updates/${version._raw}.esm.js` );
 		await Update(system_version);
 		KernelInfo.version = system_version = version._raw;
 		await KernelInfo.save();
 		console.log( '' );
 	}
 	
 	if (system_version === start_version) {
 		console.log( `Nothing to update!` );
 	}
 	else {
 		console.log( `Update finished! (${start_version} -> ${system_version})` );
 	}
 	
 	
 	if ( UpdateRuntime && UpdateRuntime.CleanUp ) {
		console.info( `Cleaning up application runtime environment...` );
		await UpdateRuntime.CleanUp();
	}
})()
.catch((e)=>{setTimeout(()=>{throw e;})});
