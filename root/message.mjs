import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";
import MsgBoard from "/root/include/message-board.esm.js";


function PageContent(req, page_name) {
	return`
	
	<!--Top carousel-->
		<div class="carousel-content">
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
				<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
				<div class="carousel-item active">
						<img src="./res/img/397828.jpg" class="d-block w-100" alt="..." >
						<div class="carousel-caption d-none d-md-block">
						<h2>太子駕訓班</h2>
<!--						<p class="animate__animated animate__zoomIn">包容.專業.安全.耐心</p>-->
						</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/IMG_8554.JPG" class="d-block w-100" alt="..." style="transform: translate(-50%, -60%)">
					<div class="carousel-caption d-none d-md-block">
					<h2>太子駕訓班</h2>
<!--					<p>30年的信賴與品質</p>-->
					</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/cour02.jpg" class="d-block w-100" alt="..." style="transform: translate(-50%, -55%)">
					<div class="carousel-caption d-none d-md-block">
					<h2>太子駕訓班</h2>
<!--					<p>桃竹地區的最佳選擇</p>-->
					</div>
				</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
		

	<div class='section'>${MsgBoard(req.info.url.path)}</div>
	<div class="temp_01" style="padding-top:40px!important;padding-bottom:40px!important;">
		<div class="container  ">
			<div class="row justify-content-center" >
				<div class="banner-text temp_01 index_04 banner" style="background-color:d3e3fc!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">本場位置</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
	</div>
	
	
	
	
	<div class='section' style="margin-top:3rem;margin-bottom:3rem;">${ MsgBoard("/index01test") }</div>

	
	</body>
	</html>
`;
}
function PageStyle(){
return`
	<style>
	@media (min-width:992px){
		.carousel-content{
			box-shadow: 0 15px 15px 2px #ccc;
			margin-top:112px;
		}
	}
	.carousel-content{
		box-shadow: 0 15px 15px 2px #ccc;
		margin-top:76px;
	}
	.carousel-item{
		 overflow:hidden;
		 height:calc(100vw*0.4);
	}
		.carousel-caption h2{
			width:40%;
			font-size:2rem;
			/*border-bottom:1px solid #d3e3fc;*/
			color:#fff;
			font-weight:bold;
			padding-bottom:0.2rem;
			margin:0 auto 0.5rem auto;
		}
		.carousel-caption h4{
			text-align:center;
			width:100%;
			color:#d3e3fc;
		}
	
		.carousel-item img{
			filter: brightness(50%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
		}
	.temp_01{
		padding-top:40px!important;
		padding-bottom:40px!important;
	}
		.temp_01 .row-banner{
			margin:1.5rem 0;
			height:180px;
			align-items:center;
			background-size:cover!important;
		}
		.temp_01 .row-banner:nth-child(2n){
			justify-content:flex-end!important;
		}
			.temp_01 .row-banner .banner-text{
				display:flex;
				flex-direction:column;
				margin:0 0 0 3rem;
			}
			.temp_01 .row-banner:nth-child(2n) .banner-text{
				margin:0 3rem 0 0;
			}
	.grid .section{
	}
	@media only screen and (max-width: 767px) {
		.medal .media-img{
			padding:2px;
		}
	}
	@media only screen and (min-width: 1200px) {
		.carousel-item{
			 overflow:hidden;
			 height:calc(100vw*0.66*0.4);
		}
			.carousel-item img{
				top:30%;
			}
		.grid{
			height:calc(1060px*0.66);
		}
	}
	</style>
`;
}
export default function(req, res){
	res.writeHead(200, {
		"Content-Type":"text/html"
	});
	// console.log('123333');
	// console.log(req,req.info.url.path);
	
	res.write(''+
`<html>
	<head>${PageHead()}${PageStyle()}</head>
	<body>${NavContent()} ${PageContent(req, 'index')} ${FooterContent()}</body>
</html>
`);
}
