/**
 * Author: JCloudYu
 * Create Date: 2020/09/08
**/
import {WriteJSON} from "/lib/stream-helper.esm.js";



export default function(req, res) {
	WriteJSON(res, {}, 404);
}
