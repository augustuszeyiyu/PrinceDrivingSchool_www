

/**
 *	Author: AugustusYu
 *	Create: 2020/11/02
**/

function PageContent(page_name) {
	return`
	<!--未分類-->
	<div class="container" style="padding-top:80px;">
		<div class="row justify-content-center" >
			<div class="col-xl-5 col-7">
				<div class="index_04 justify-content-center " style="text-align:center;">
					<h2 class="" style="font-weight:bolder;color:darkgrey;font-size:2.5rem;margin: 1rem 0 1rem 0;line-height: 4rem;">後台</h2>
				</div>
			</div>
		</div>
	</div>
	
	</body>
	</html>
	
	<script type="application/javascript">(()=>{
	"use strict";
		const test_container = FetchMsgList('/index01test');
		console.log(test_container);
		
		function FetchMsgList(path) {
			const param = new URLSearchParams();
			param.set('_e', path);
			return fetch('/api/board/?' + param.toString(), {method:'GET', mode:'no-cors', credentials:"same-origin"}).then(async(res)=>{
				const result = await res.json();
				return ( !res.ok )?Promise.reject(result) : result;
			});
		}
	})()</script>
`;
}


function PageStyle(){
return`
	<style>
	.test-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 500px;
		background-color: #eee;
	}
	</style>
`;
}



export default function(req, res){
	console.log('cloud ! you the ass hole');

	res.writeHead(200, {
		"Content-Type":"text/html"
	});
	
	res.write(''+
	`<html>
		<head></head>
		<body>${PageContent('index')}</body>
	 </html>
	`);
}
