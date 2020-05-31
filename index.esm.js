/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
import {CheckDataSystemVersion} from "/kernel-info.esm.js";

(async()=>{
	if ( !CheckDataSystemVersion() ) return;
	
	
	
	logger.info( "Initializing application..." );
	// Initialize and boot system here...
	
	
	
	process
	.on( 'SIGNAL_INTERRUPTION', ()=>{})
	.on( 'SIGNAL_TERMINATION', async()=>{
		logger.info( `Cleaning up application...` );
		// Clean ip and terminate system here...
		
		logger.info( `Exiting...` );
		setTimeout(()=>process.exit(1));
	});
})().catch((e)=>setTimeout(()=>{throw e}));
