import "extes";
import "/kernel/logger.esm.js";
import {ColorCode} from "/kernel/terminal-ctrl.esm.js";



process
.on( 'unhandledRejection', (rej)=>{
	logger.error( `${ColorCode.LIGHT_RED}Receiving unhandled rejection! Exiting...${ColorCode.RESET}` );
	console.error(rej);
	process.exit(1);
})
.on( 'uncaughtException', (e)=>{
	logger.error(`${ColorCode.LIGHT_RED}Receiving uncaught exception! Exiting...${ColorCode.RESET}`);
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
	console.error( `${ColorCode.DARK_GRAY}Obtaining kernel info...${ColorCode.RESET}` );
	await import('/kernel-info.esm.js').then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	console.error( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/config.esm.js" ).then(({Init})=>Init());
	
	// NOTE: Load environmental configurations
	console.error( `${ColorCode.DARK_GRAY}Loading configurations...${ColorCode.RESET}` );
	await import( "/kernel/runtime.esm.js" ).then(({Init})=>Init());

	// NOTE: Boot system core
	let boot_script = null;
	switch( boot_cmd ) {
		case "version":
			boot_script = "/kernel/boot-scripts/version.esm.js";
			break;
	
		case "update":
			boot_script = "/kernel/boot-scripts/update.esm.js";
			break;
			
		case "main":
		default:
			boot_script = "/index.esm.js";
			break;
	}
	
	
	await import(boot_script);
})()
.catch((e)=>{
	// NOTE: Force to cast unexpectedly rejected promises into exceptions
	setTimeout(()=>{throw e;});
});

