import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";

function PageContent(page_name){
return	`
	<div class="carousel-content">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="./res/img/tz793.jpg" class="d-block w-100" alt="..." >
				<div class="carousel-caption d-none d-md-block">
				<h2>環境設施</h2>
<!--					<p>包容.專業.安全.耐心</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="..." >
				<div class="carousel-caption d-none d-md-block">
				<h2>環境設施</h2>
<!--				<p>年的信賴與品質</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="..." >
				<div class="carousel-caption d-none d-md-block">
				<h2>環境設施</h2>
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



	<div class="temp_01" style="padding-top:40px!important;padding-bottom:40px!important;">
		<div class="container  ">
			<div class="row justify-content-center" >
				<div class="banner-text temp_01 index_04 banner" style="background-color:#d3e3fc!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">環境設施</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
		
	</div>
	<div class="container">
		<div class="jumbotron" style="background-color:transparent; height: fit-content;">
			<div class="grid">
				<div class="">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/space/002.JPG">
						<div class="text"  style="width: 100%;">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>第二考照區空拍圖</h3>
							<p >上坡起步，S彎道、路邊停車、倒車入庫</p>
	<!--						<a href="" class="text-button-with-arrow">更多</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/space/003.JPG">
						<div class="text">
							<h3>道路駕駛組</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>道路駕駛</h3>
							<p>道路駕駛車輛與教練</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/space/005.JPG">
		
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>場內用車</h3>
							<p>場內用車，道路駕駛用車</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/space/001.JPG">
		
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>第一考照區空拍圖</h3>
							<p>普通重型機車、大型重型機車</p>
	<!--						<a href="/environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jumbotron" style="background-color:transparent; height: fit-content;">
			<div class="grid">
				<div class="">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/space/770.jpg">
		
						<div class="text">
							<h3>現場實景</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>筆試區</h3>
							<p >測驗筆試區</p>
	<!--						<a href="" class="text-button-with-arrow">更多</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/space/771.jpg">
		。
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>筆試區</h3>
							<p>測驗筆試區</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/space/725.jpg">
		
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>9人用小貨車</h3>
							<p>9人用貨車</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/space/902.jpg">
		
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>大型重型機車</h3>
	<!--						<p>場內駕駛車輛</p>-->
	<!--						<a href="/environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jumbotron" style="background-color:transparent;height: fit-content;">
			<div class="grid">
				<div class="">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/space/901.jpg">
		
						<div class="text">
							<h3>學員保險</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>學員保險</h3>
	<!--						<p>測驗筆試區</p>-->
	<!--						<a href="" class="text-button-with-arrow">更多</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/space/903.jpg">
		。
						<div class="text">
							<h3>現場實景</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>現場實景</h3>
							<p>現場實景</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/space/904.JPG">
		
						<div class="text">
							<h3>室內課程教室</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>室內課程教室</h3>
							<p>室內課程教室</p>
	<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/tz0143.JPG">
		
						<div class="text">
							<h3>場內用車</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>更多資訊...</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>機車考照區</h3>
							<p>場內駕駛車輛</p>
	<!--						<a href="/environment.html" class="text-button-with-arrow">更多</a>-->
						</div>
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
		.carousel-item img{
			filter: brightness(30%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
		}
		
	.carousel-caption{
			/*bottom:32%;*/
		}
		.carousel-caption h2{
			width:20%;
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
	
	res.write(''+
`<html>
	<head>${PageHead()}${PageStyle()}</head>
	<body>${NavContent()} ${PageContent('')} ${FooterContent()}</body>
</html>
`);
}
