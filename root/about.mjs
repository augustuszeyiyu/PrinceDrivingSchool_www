import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";
import {BuildTemplate} from "/lib/tiny-tmpl.esm.js";



function PageContent(){
return`
	<div class="carousel-content">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="./res/img/S__125288456.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h2>關於我們</h2>
	<!--				<p>年的信賴與品質</p>-->
					</div>
				</div>
				<div class="carousel-item ">
					<img src="./res/img/S__15630562.jpg" class="d-block w-100" alt="..." style="transform: translate(-50%, -30%)">
					<div class="carousel-caption d-none d-md-block">
					<h2>關於我們</h2>
	<!--					<p>包容.專業.安全.耐心</p>-->
					</div>
				</div>
	
				<div class="carousel-item">
					<img src="./res/img/IMG_8554.JPG" class="d-block w-100" alt="..." style="transform: translate(-50%, -60%)">
					<div class="carousel-caption d-none d-md-block">
					<h2>關於我們</h2>
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
				<div class="col-12 col-md-4" >
					<img src="./res/img/logo02.png" alt="..." class="rounded mx-auto d-block">
				</div>
			</div>
		</div>
	</div>
	
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-9 col-12">
				<div class="section">
<!--					<h4 class="title" style="text-align:center;">太子駕訓班</h4>-->
				    <p style="font-size: 20px;">
				    	&emsp;&emsp;太子駕訓班至民國85年成立以來，秉持著｢用路人的安全是最基本也是最高的教學原則｣以培育駕駛人遵守交通安全規則，
				    	建立優良駕駛行為為依歸。
						<br>&emsp;&emsp;
						近年來交通事故頻傳，人為因素占了大部分，交通安全不應只是口號，如何降低肇事率是我們所有用路人共同的責任，更是我們從事交通安全教育人員應盡的義務。
						為積極參與協助政府之交通安全教育宣導，本班與監理機關、警察機關攜手深入鄰里、校園、機關舉辦活動、
						等場所舉辦用路人交通安全宣導活動。期望因此能降低交通安全事故，達到回饋社會、善盡社會責任。
					</p>
				</div>
			</div>
			<div class="col-md-10 col-12 mt-5 mb-5">
				<img src="./res/img/tzd01.JPG" alt="..." class="rounded mx-auto d-block img-thumbnail" style="width:inherit;">
			</div>
		</div>
	</div>
	

`;}


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
	.col-9 .section p{
		font-size:1rem;
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
	/*course_content*/
	
	input:disabled { cursor:not-allowed!important; }
	.table .t-head {
		grid-template-columns:repeat(5, 1fr);
		font-weight:normal;
	 	border-bottom:0;
	 	background-color:#0D7496;
	 	color:#EEEEEE;
	}
	.table .t-row { grid-template-columns:repeat(5, 1fr);}
	.table .t-column { box-sizing:border-box; border:1px solid #eee!important;}
	.table .t-row {
		display: flex;
	}
	.table .t-row .t-column {
		flex:1;
	}
	.table > .t-row:nth-child(2n+1) {
	}
	.table > .t-row {
	}
	.table-select{
		background-color:#F2EDB1!important;
		border:none!important;
		margin:0!important;
		padding:5px 0!important;
		
	}
	.file-uploader.image-uploader {
		background-color:#F2EBD1;
	}
	.section{
		margin:30px 0;
	}
	</style>
`;}
// const PageContent = BuildTemplate(String.stringTemplate`${PageStyle}${PageHtml}${PageScript}`);
export default function(req, res){
	res.writeHead(200, {
		"Content-Type":"text/html"
	});
	
	res.write(''+
`<html>
	<head>${PageHead()}</head>
	<body>${PageStyle()} ${NavContent()} ${PageContent('')} ${FooterContent()}</body>
</html>
`);
}
