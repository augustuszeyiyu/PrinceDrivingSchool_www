import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";

function PageContent(page_name){
return	`
	<div style="padding-top:1px;box-shadow: 0 15px 15px 2px #ccc;">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
			<div class="carousel-item active">
					<img src="./res/img/tz793.jpg" class="d-block w-100" alt="..." style="  filter: brightness(50%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
					<div class="carousel-caption d-none d-md-block" style="bottom:40%!important;">
					<h2>環境與設施</h2>
					<p>包容.專業.安全.豪華</p>
					</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="..." style="filter: brightness(60%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block" style="bottom:40%!important;">
				<h2>環境與設施</h2>
				<p>包容.專業.安全.豪華</p>
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="..." style="filter: brightness(60%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block" style="bottom:40%!important;">
				<h2>環境與設施</h2>
				<p>包容.專業.安全.豪華</p>
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
	
	
<div class="container"  style="margin-top:80px;">
	<div class="row justify-content-center" >
		<div class="col-xl-5 " style="padding:0.5rem 15px;">
			<div class="index_04 justify-content-center " style="text-align:center;">
				<h2 class="" style="font-weight:bolder;color:darkgrey;font-size:2.5rem;margin: 1rem 0 1rem 0;line-height: 4rem;">場地環境</h2>
			</div>
		</div>
	</div>
	<div class="jumbotron" style=background-color:white>
		<div class="grid">
			<div class="">
				<div class="section left top" style="z-index: 1;">
					<img src="./res/img/space/002.JPG">
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
	
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	。
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
						</div>
					</div>
	
					<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
						<img class="close-icon" src="./res/img/delete-icon-black.png">
						<h3>車輛展示</h3>
						<p>場內用車，道路駕駛用車</p>
<!--						<a href="./environment.html" class="text-button-with-arrow">更多</a>-->
					</div>
	
				</div>
	
				<div class="section right bottom" style="z-index: 1;">
					<img src="./res/img/space/001.JPG">
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	<div class="jumbotron" style=background-color:white>
		<div class="grid">
			<div class="">
				<div class="section left top" style="z-index: 1;">
					<img src="./res/img/space/770.jpg">
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
	
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	<div class="jumbotron" style=background-color:white>
		<div class="grid">
			<div class="">
				<div class="section left top" style="z-index: 1;">
					<img src="./res/img/space/901.jpg">
	
					<div class="text" style="opacity: 0.5;">
						<h3>學員保險</h3>
	
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
					<div class="text" style="opacity: 0.5;">
						<h3>現場實景</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	
					<div class="text" style="opacity: 0.5;">
						<h3>室內課程教室</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	
					<div class="text" style="opacity: 0.5;">
						<h3>場內用車</h3>
						<div class="faux-button">
							<div class="plus-icon"></div>
<!--							<h5>更多資訊</h5>-->
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
	.carousel-content{
		box-shadow: 0 15px 15px 2px #ccc;
	}
	.carousel-item{
		 overflow:hidden;
		 height:calc(100vw*0.4);
	}
		.carousel-item img{
			filter: brightness(90%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
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
