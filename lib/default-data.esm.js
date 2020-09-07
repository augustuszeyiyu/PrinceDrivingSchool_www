/**
 * Author: JCloudYu
 * Create Date: 2020/09/08
**/
import {UniqueId} from "jsboost/unique-id.esm";

export default class {
	static get MessageBoardMessage() {
		const id = UniqueId.from().toString();
		const now = Date.unix();
		
		return {
			id,
			endpoint: '',
			nick_name: '',
			message: '',
			source_ip: '',
			revoke_time:0,
			create_time:now
		};
	}
}
