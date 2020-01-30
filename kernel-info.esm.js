import fs from "fs";
import os from "os";
import path from "path";
import {Beson} from "beson/beson.esm.js";

const KernelArchVersion = "0.1.0";



// INFO: Prepare environmental information
const IsWindowsEnv = os.platform().substring(0, 3) === "win";
const WorkingRoot = path.dirname((import.meta.url).substring(IsWindowsEnv ? 8 : 7));
const CmdArgs = process.argv.slice(3);



const DATA = Object.assign(Object.create(null), {kernel_data:{}});
const KERNEL_DATA_STORAGE = `${WorkingRoot}/.kernel.bes`;
const _load_kernel_data=()=>{
	try {
		const buffer = fs.readFileSync(KERNEL_DATA_STORAGE);
		const kernel_data = Beson.Deserialize(buffer);
		if ( Object(kernel_data) !== kernel_data ) {
			throw new TypeError("Data stored in .kernel.bes must be an Object!");
		}
		
		DATA.kernel_data = kernel_data;
	}
	catch(e) {
		if ( e.code === "ENOENT" ) return;
		throw e;
	}
};
const _save_kernel_data=()=>{
	fs.writeFileSync(KERNEL_DATA_STORAGE, Buffer.from(Beson.Serialize(DATA.kernel_data)));
};
const KernelInfo = new Proxy({}, {
	get:(target, prop)=>{
		switch(prop) {
			case "save": return _save_kernel_data;
			case "load": return _load_kernel_data;
			case "cli_args":
				return CmdArgs.slice(0);
				
			default:
				return DATA.kernel_data[prop];
		}
	},
	set:(target, prop, value)=>{
		switch(prop) {
			case "save":
			case "load":
			case "cli_args":
				return false;
			
			default:
				DATA.kernel_data[prop] = value;
				return true;
		}
	}
});
const ProjectInfo = JSON.parse(fs.readFileSync(`${WorkingRoot}/package.json`));






export {IsWindowsEnv, WorkingRoot, KernelInfo, ProjectInfo, KernelArchVersion};
export function Init() {
	_load_kernel_data();
}
