/**
 *	Author: JCloudYu
 *	Create: 2020/02/27
**/
import {WorkingRoot, CheckDataSystemVersion} from "/kernel-info.esm.js";
import {RuntimeDir} from "/kernel/runtime.esm.js";



(async()=>{
	// INFO: Prevent script from running when data version and program version are incompatible to each other
	if ( !CheckDataSystemVersion() ) return;
	
	// INFO: Initialize runtime here...
	
	
	// INFO: Do script content here...
	logger.info( `Tool ${import.meta.url} initialized...` );
	logger.info( `Runtime Dir: ${RuntimeDir}` );
	logger.info( `Working Root: ${WorkingRoot}` );
})().catch((e)=>{setTimeout(()=>{throw e;})});
