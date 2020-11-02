import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";

function PageContent(page_name){
return	`

<!-- carousel -->
	<div class="carousel-content">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="./res/img/DSC_0029.JPG" class="d-block w-100" alt="..." >
				<div class="carousel-caption d-none d-md-block">
				<h2>考照注意事項</h2>
<!--					<p>包容.專業.安全.耐心</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/DSC_0051.JPG" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block">
				<h2>考照注意事項</h2>
<!--				<p>年的信賴與品質</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/DSC_0059.JPG" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block">
				<h2>考照注意事項</h2>
<!--				<p>桃竹地區的最佳選擇</p>-->
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
	
<!-- panel -->
	<div class="temp_01" style="padding-top:40px!important;padding-bottom:40px!important;">
		<div class="container  ">
			<div class="row justify-content-center" >
				<div class="banner-text temp_01 index_04 banner" style="background-color:d3e3fc!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">考照注意事項</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
	</div>


<!--照片花絮-->
	<div class="">
<!--Part 1 -->
		<div class="container">
			<div class="row">
				<div class="card mb-5 pb-2 col-12">
					<div class="card-body">
						<h5 class="card-title text-danger">普通重機考照流程</h5>
						<p class="card-text">對流程的不確定性感到害怕嗎?普通重機要如何考照呢?有哪些流程呢?要注意哪些事項呢?請看我們的親身示範喔!!</p>
					</div>
					<div>
						<iframe width="100%" height="483" src="https://www.youtube.com/embed/PxJhf0QGTOg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
				
				
				<div class="card mb-5 pb-2 col-12">
					<div class="card-body">
						<h5 class="card-title text-danger">汽車道路駕駛考驗評分標準說明</h5>
						<p> 5月1日小型汽車駕照就要全面實施道路駕駛考驗囉！
							你知道考驗項目有那些嗎？
							開車上路前要檢查些什麼呢？
							停車下車前要做到那些動作呢？
							考照歐啪的眉角、安全駕駛的觀念全都在這裡，快來看看喔
						</p>
					</div>
					<div>
						<iframe width="100%" height="483" src="https://www.youtube.com/embed/jgqg0R7dxKU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</div>
	
	</div>

<script src="./res/js/home.js"></script>

`;
}
function PageStyle(){
return`
	<style>
	@media (min-width:992px){
		.pictures > .container{
			border-radius:0.5rem;
			padding-top:1rem;
			padding-bottom:1rem;
			margin-top:2rem;
			margin-bottom:4rem;
		}
		.carousel-content{
			box-shadow: 0 15px 15px 2px #ccc;
			margin-top:112px;
		}
		
		.carousel-item{
			 overflow:hidden;
			 height:calc(100vw*0.66*0.4)!important;
		}
			.carousel-item img{
				top:30%;
			}
		
		.grid{
			height:900px;
		}
			.grid .section{
				height:450px;
				border:1px solid rgba(229,239,227,1);
			}
			.grid .section img{
				height:inherit;
				/*transform: translate(-50%, -50%);*/
				/*top:50%;*/
				/*left:50%;*/
			}
			.grid .section .text {
				position:absolute;
				width:auto;
				padding:1rem 1.5rem;
				/*background-color:rgba(229,239,227,1);*/
				background-color:white;
			}
				.grid .section .text h3{
					color:#4c4d3d;
				}
				.grid .section .text .faux-button{
					display:none;
				}
				.grid .section .text .faux-button h5{
					font-size:1rem;
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
		.carousel-item img{
			filter: brightness(50%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
		}
		
	.carousel-caption{
			/*bottom:32%;*/
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
	@media only screen and (max-width: 767px) {
		.medal .media-img{
			padding:2px;
		}
	}
	/*@media only screen and (min-width: 1200px) {*/
	/*	.carousel-item{*/
	/*		 overflow:hidden;*/
	/*		 height:calc(100vw*0.66*0.4);*/
	/*	}*/
	/*		.carousel-item img{*/
	/*			top:30%;*/
	/*		}*/
	/*	.grid{*/
	/*		height:calc(1060px*0.66);*/
	/*	}*/
	/*}*/
	</style>
`;
}
export default function(req, res){
	res.writeHead(200, {
		"Content-Type":"text/html"
	});
	
	res.write(''+
`<html>
	<head>${PageHead()}${PageStyle()}</head>
	<body>${NavContent()} ${PageContent('')} ${FooterContent()}</body>
</html>
`);
}
