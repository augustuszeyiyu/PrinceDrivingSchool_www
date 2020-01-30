/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
import "extes";
import "/kernel/logger.esm.js";
import {ColorCode} from "/kernel/terminal-ctrl.esm.js";



process
.on( 'unhandledRejection', (rej)=>{
	logger.error( `${ColorCode.LIGHT_RED}Receiving unhandled rejection! Exiting...${ColorCode.RESET}` );
	logger.error(rej);
	process.exit(1);
})
.on( 'uncaughtException', (e)=>{
	logger.error(`${ColorCode.LIGHT_RED}Receiving uncaught exception! Exiting...${ColorCode.RESET}`);
	logger.error(e);
	process.exit(1);
})
.on( 'SIGINT', (...args)=>{
	process.emit( 'SIGNAL_INTERRUPTION', ...args );
})
.on( 'SIGTERM', (...args)=>{
	process.emit( 'SIGNAL_TERMINATION', ...args );
});



(async()=>{
	// NOTE: Idle everything to hoist warning verbose
	await setTimeout.idle(100);
	
	// NOTE: Decide boot script
	const [,, boot_cmd] = process.argv;
	
	// NOTE: Collect information about current runtime environment
	logger.info( `${ColorCode.DARK_GRAY}Obtaining kernel info...${ColorCode.RESET}` );
	await import('/kernel-info.esm.js').then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	logger.info( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/config.esm.js" ).then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	logger.info( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/runtime.esm.js" ).then(({Init})=>Init());

	// NOTE: Boot system core
	let boot_script = null;
	switch( boot_cmd ) {
		case "update":
			logger.info( `${ColorCode.DARK_GRAY}Booting updating system...${ColorCode.RESET}` );
			boot_script = "/update/update.esm.js";
			break;
			
		case "main":
		default:
			logger.info( `${ColorCode.DARK_GRAY}Booting main system...${ColorCode.RESET}` );
			boot_script = "/index.esm.js";
			break;
	}
	
	
	await import(boot_script);
})()
.catch((e)=>{
	// NOTE: Force to cast unexpectedly rejected promises into exceptions
	setTimeout(()=>{throw e;});
});

