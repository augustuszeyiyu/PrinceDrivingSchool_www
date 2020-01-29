/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
import "extes";
import {ColorCode} from "/kernel/terminal-ctrl.esm.js";



process
.on( 'unhandledRejection', (rej)=>{
	console.error( `${ColorCode.LIGHT_RED}Receiving unhandled rejection! Exiting...${ColorCode.RESET}` );
	console.error(rej);
	process.exit(1);
})
.on( 'uncaughtException', (e)=>{
	console.error(`${ColorCode.LIGHT_RED}Receiving uncaught exception! Exiting...${ColorCode.RESET}`);
	console.error(e);
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
	console.log( `${ColorCode.DARK_GRAY}Obtaining kernel info...${ColorCode.RESET}` );
	await import('/kernel-info.esm.js').then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	console.log( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/config.esm.js" ).then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	console.log( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/runtime.esm.js" ).then(({Init})=>Init());

	// NOTE: Boot system core
	let boot_script = null;
	switch( boot_cmd ) {
		case "update":
			console.log( `${ColorCode.DARK_GRAY}Booting updating system...${ColorCode.RESET}` );
			boot_script = "/update/update.esm.js";
			break;
			
		case "main":
		default:
			console.log( `${ColorCode.DARK_GRAY}Booting main system...${ColorCode.RESET}` );
			boot_script = "/index.esm.js";
			break;
	}
	
	
	await import(boot_script);
})()
.catch((e)=>{
	// NOTE: Force to cast unexpectedly rejected promises into exceptions
	setTimeout(()=>{throw e;});
});

