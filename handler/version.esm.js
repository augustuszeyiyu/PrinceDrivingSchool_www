/**
 *	Author: JCloudYu
 *	Create: 2020/01/29
**/
import {KernelInfo, KernelArchVersion, ProjectInfo} from "/kernel-info.esm.js";



export function Handle(req, res) {
	res.write( `${KernelInfo.version}, ${ProjectInfo.version}, ${KernelArchVersion}\n` );
}
