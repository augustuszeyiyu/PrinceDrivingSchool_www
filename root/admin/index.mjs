/**
 *	Author: JCloudYu
 *	Create: 2020/01/30
**/

import {Beson} from "beson/beson.esm.js";
import {Base64URLEncode} from "jsboost/base64.esm.js";
import {BuildTemplate} from "/lib/tiny-tmpl.esm.js";


export default async function(req, res){

	const data = {data:1234132}
	const encoded_data = '"' + Base64URLEncode(Beson.Serialize(data)) + '"';

	res.write(`
	<!DOCTYPE html>
	<head>
		<meta charset="utf-8"/>
		<title>Dynamic Page</title>
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
		<script src="./js/test.js" ></script>
		<link rel='stylesheet' type='text/css' href='./css/style.css'/>
		
	</head>
	<body>
		<h1>Hi! in /root/admin of Dynamic Page...</h1>

		<script type="application/javascript">
			console.log("Hello World!");
		</script>
		<script type="module">

		import {Base64URLDecode} from "/node_modules/jsboost/base64.esm.js";
		import {Beson} from "/node_modules/beson/beson.esm.js"

		const recommend_data = Beson.Deserialize(Base64URLDecode(${encoded_data}));
		console.log({recommend_data})

		</script>
	</body>
	</html>
	`);

	
	
}