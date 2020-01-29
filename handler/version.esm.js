/**
 *	Author: JCloudYu
 *	Create: 2020/01/29
**/
import {KernelInfo} from "/kernel-info.esm.js";
import {WriteJSON} from "/lib/stream-helper.esm.js";



export function Handle(req, res) {
	WriteJSON(res, {
		kernel: KernelInfo.version
	});
}
