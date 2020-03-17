import {Beson} from "beson/beson.esm.js";
import {Base64URLEncode} from "jsboost/base64.esm.js";


export default async function(req, res){
	
	const data = {data:1234132}
	const encoded_data = '"' + Base64URLEncode(Beson.Serialize(data)) + '"';

	res.write(`
	<!DOCTYPE html><html>
	<head>
		<title>Dynamic Page</title><style>body{background:#F00;}h2{color:white;}</style>
	</head>
	<body><h2>Hi! in /root/a/b/a/b/c.mjs of Dynamic Page...</h2>
	<script type="module">

	import {Base64URLDecode} from "/node_modules/jsboost/base64.esm.js";
	import {Beson} from "/node_modules/beson/beson.esm.js"

	const recommend_data = Beson.Deserialize(Base64URLDecode(${encoded_data}));
	console.log({recommend_data})

	</script>
	</body></html>
	`);	
	
}