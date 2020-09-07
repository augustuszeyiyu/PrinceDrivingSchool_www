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
					<img src="./res/img/tz793.jpg" class="d-block w-100" alt="..." style="  filter: brightness(90%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
					<div class="carousel-caption d-none d-md-block">
					<h4>教練介紹</h4>
<!--					<p>包容.專業.安全.耐心</p>-->
					</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="..." style="filter: brightness(90%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block">
				<h4>教練介紹</h4>
<!--				<p>年的信賴與品質</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="..." style="filter: brightness(90%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block">
				<h4>教練介紹</h4>
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
				<div class="banner-text temp_01 index_04 banner" style="background-color:transparent!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">教練介紹</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
		
	</div>

	<div class="container">
		<div class="row justify-content-center" >
			
			<div class="row justify-content-center">
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">王敏郎</div>
						<div class="index_04_img"><img src="/res/img/teacher/01.JPG"></div>
						<div class="index_04_info"><p>努力不一定成功，但要成功一定必須努力</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">王興彩</div>
						<div class="index_04_img"><img src="/res/img/teacher/12.JPG"></div>
						<div class="index_04_info"><p>太子駕訓班</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">王興業</div>
						<div class="index_04_img"><img src="/res/img/teacher/02.JPG"></div>
						<div class="index_04_info"><p>每天為自己加油~因為你是最棒的!</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">宋俊毅</div>
						<div class="index_04_img"><img src="/res/img/teacher/03.JPG"></div>
						<div class="index_04_info"><p>在終點等待你的是另一個成長的自己</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">邱顯富</div>
						<div class="index_04_img"><img src="/res/img/teacher/04.JPG"></div>
						<div class="index_04_info"><p>凡事盡力，結果隨緣</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">游禎好</div>
						<div class="index_04_img"><img src="/res/img/teacher/06.JPG"></div>
						<div class="index_04_info"><p>只要肯努力加油；成功一定是你的</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">黃教君</div>
						<div class="index_04_img"><img src="/res/img/teacher/05.JPG"></div>
						<div class="index_04_info"><p>做人處事豈能盡隨人意，但求無愧於心</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">黃聖華</div>
						<div class="index_04_img"><img src="/res/img/teacher/07.JPG"></div>
						<div class="index_04_info"><p>凡事都正面，能量永不滅</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">楊建和</div>
						<div class="index_04_img"><img src="/res/img/teacher/08.jpg"></div>
						<div class="index_04_info"><p>謙受益；滿招損~態度決定高度</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">葉秀德</div>
						<div class="index_04_img"><img src="/res/img/teacher/09.JPG"></div>
						<div class="index_04_info"><p>做最真的自己</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">鍾國興</div>
						<div class="index_04_img"><img src="/res/img/teacher/10.JPG"></div>
						<div class="index_04_info"><p>不想被別人否定；自己就要更努力</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">張景熒</div>
						<div class="index_04_img"><img src="/res/img/teacher/14.jpg"></div>
						<div class="index_04_info"><p>不求與人相比，但求超越自己</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">蘇玟潔</div>
						<div class="index_04_img"><img src="/res/img/teacher/11.png"></div>
						<div class="index_04_info"><p>人生的旅程在乎的不是目的地，而是經歷的過程</p></div>
					</div>
				</div>
				<div class="col-xl-4 col-sm-12" style="padding:0.5rem 15px;">
					<div class="index_04">
						<div class="index_04_title">王誌祺</div>
						<div class="index_04_img"><img src="/res/img/teacher/13.png"></div>
						<div class="index_04_info"><p>把不可能變成可能；把可能變成無限可能</p></div>
					</div>
				</div>
			</div>
		</div>
	</div>

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
