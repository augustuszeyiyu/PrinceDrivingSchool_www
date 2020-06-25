/**
 *	Author: JCloudYu
 *	Create: 2020/02/27
**/
import {WorkingRoot, CheckDataSystemVersion, RuntimeDir} from "/kernel.esm.js";



(async()=>{
	// INFO: Prevent script from running when data version and program version are incompatible to each other
	if ( !CheckDataSystemVersion() ) return;
	
	// INFO: Initialize runtime here...
	
	
	
	
	
	
	// INFO: Do script content here...
	logger.info( `Tool ${import.meta.url} initialized...` );
	logger.info( `Runtime Dir: ${RuntimeDir}` );
	logger.info( `Working Root: ${WorkingRoot}` );
	logger.info( `Starting regular timer...` );
	
	let prev = 0;
	const timer = setInterval.create();
	timer(()=>{
		const now = new Date();
		if ( (now.getTime() - prev) < 1000 ) return;
		prev = now.getTime();
		
		
		logger.info( "NOW: " + now.toLocaleISOString() );
	}, 500);
	
	
	
	
	process
	.on( 'SIGNAL_INTERRUPTION', ()=>{})
	.on( 'SIGNAL_TERMINATION', async()=>{
		// INFO: Cleanup runtime here...
		logger.info( `Cleaning up regular timer...` );
		timer.clear();
		
		logger.info( `Exiting...` );
		setTimeout(()=>process.exit(1));
	});
	
	
})().catch((e)=>{setTimeout(()=>{throw e;})});
