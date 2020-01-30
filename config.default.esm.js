/**
 *	Author: JCloudYu
 *	Create: 2019/05/27
**/
export default {
	runtime_dir: ".runtime",
	server: {
		host: '127.0.0.1', port: 4321,
		routes: [ "/index.html", "/css" ],
		script_root: "./root/script",
		view_root: "./root/view"
	}
};
