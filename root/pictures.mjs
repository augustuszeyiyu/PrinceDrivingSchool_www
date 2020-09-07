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
				<h2>照片花絮</h2>
<!--					<p>包容.專業.安全.耐心</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block">
				<h2>照片花絮</h2>
<!--				<p>年的信賴與品質</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="...">
				<div class="carousel-caption d-none d-md-block">
				<h2>照片花絮</h2>
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
				<div class="banner-text temp_01 index_04 banner" style="background-color:d3e3fc!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">照片花絮</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
	</div>


<!--照片花絮-->
<div class="container-fluid" style="background-color:#e5efe3!important; padding:10rem 5rem">
</div>
<div class="container" >
	<div class="jumbotron" style="background-color:transparent">
		<div class="grid">
				<div class="section left top" style="z-index: 1;">
					<img src="./res/img/space/001.JPG" style="">
	
					<div class="text" style="">
<!--					<div class="text" style="opacity: 0.2;">-->
						<h3>場地實況</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
							<h5>more..</h5>
						</div>
					</div>
					<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
						<img class="close-icon" src="./res/img/delete-icon-black.png">
	
						<h3>第一考區空拍圖</h3>
						<p >筆試區，普通重機、重機考試區</p>
						<a href="./environment.html" class="text-button-with-arrow">更多..</a>
						<!--/industries/agriculture-->
					</div>
				</div>
	
				<div class="section right top" style="z-index: 1;">
					<img src="./res/img/space/004.JPG" style="">
	
					<div class="text">
						<h3>場地實況</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
							<h5>more..</h5>
						</div>
					</div>
	
					<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
						<img class="close-icon" src="./res/img/delete-icon-black.png">
						<h3>教練用車</h3>
						<p>多種類別教練用車</p>
						<a href="./environment.html" class="text-button-with-arrow">更多..</a>
					</div>
				</div>
	
				<div class="section left bottom" style="z-index: 1;">
					<img src="./res/img/space/003.JPG" style="">
	
					<div class="text">
						<h3>場地實況</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
							<h5>more..</h5>
						</div>
					</div>
	
					<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
						<img class="close-icon" src="./res/img/delete-icon-black.png">
						<h3>路考教練組</h3>
						<p>BMW路考用車，專業教練</p>
						<a href="./environment.html" class="text-button-with-arrow">更多..</a>
					</div>
	
				</div>
	
				<div class="section right bottom" style="z-index: 1;">
					<img src="./res/img/space/002.JPG" style="">
	
					<div class="text">
						<h3>場地實況</h3>
	
						<div class="faux-button">
							<div class="plus-icon"></div>
							<h5>more..</h5>
						</div>
					</div>
	
					<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
						<img class="close-icon" src="./res/img/delete-icon-black.png">
						<h3>第二考區空拍圖</h3>
						<p>汽車考照區，路邊停車、倒車，上坡起步</p>
						<a href="./environment.html" class="text-button-with-arrow">更多..</a>
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
