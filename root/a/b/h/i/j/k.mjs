import {Beson} from "beson/beson.esm.js";
import {Base64URLEncode} from "jsboost/base64.esm.js";


export default async function(req, res){
	
	const data = {data:1234132}
	const encoded_data = '"' + Base64URLEncode(Beson.Serialize(data)) + '"';

	res.write(`
	<!DOCTYPE html><html>
	<head>
		<title>Dynamic Page</title>
		<script src="./script/k.script.js"></script>
		<link rel='stylesheet' type='text/css' href='./k.style.css'/>
	</head>
	<body><h2>Hi! in /root/a/b/h/i/j/k.mjs of Dynamic Page...</h2>
	<script type="module">

	import {Base64URLDecode} from "/node_modules/jsboost/base64.esm.js";
	import {Beson} from "/node_modules/beson/beson.esm.js"

	const recommend_data = Beson.Deserialize(Base64URLDecode(${encoded_data}));
	console.log({recommend_data})

	</script>
	</body></html>
	`);	
	
}