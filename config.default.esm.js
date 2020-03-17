/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
export default {
	runtime_dir: ".runtime",
	server: {
		host: '127.0.0.1', port: 4321,
		routes: [
			"/css", "js",
			"/index.html", 
			"/node_modules",
			"/lib",
			"/member-view",
		],
		root: '/root',
	}
};
