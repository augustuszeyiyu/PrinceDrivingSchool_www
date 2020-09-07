/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
export default {
	runtime_dir: ".runtime",
	server: {
		host: '127.0.0.1', port: 8080,
		document_root: './root',
		script_ext: [ ".mjs" ],
		restricted_ext: [ ".lib.mjs" ],
	},
	data_sources: [
		{script:"source.mongo.esm.js", host:'127.0.0.1', port:27017, database:"driving"}
	]
};
