import path from "path";



const LoadedModules = [];
export async function Init(data_sources) {
	const promises = [];
	for(const source_info of data_sources) {
		const {script} = source_info;
		const script_path = path.resolve('/data-source', script);
		promises.push(import(script_path).then((module)=>{
			LoadedModules.push(module);
			if (module.Init) {
				return module.Init(Object.assign({},source_info));
			}
			return;
		}));
	}
	await Promise.wait(promises);
}
export async function CleanUp(data_sources) {
	const promises = [];
	for(const source_info of data_sources) {
		const {script} = source_info;
		const script_path = path.resolve('/data-source', script);
		promises.push(import(script_path).then((module)=>{
			LoadedModules.push(module);
			if (module.CleanUp) {
				return module.CleanUp(Object.assign({},source_info));
			}
			return;
		}));
	}
	await Promise.wait(promises);
}
