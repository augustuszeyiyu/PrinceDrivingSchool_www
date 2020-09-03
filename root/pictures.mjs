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
			<div class="carousel-item active" style="overflow:hidden; height:66vh;">
					<img src="./res/img/tz793.jpg" class="d-block w-100" alt="..." style="  filter: brightness(90%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
					<div class="carousel-caption d-none d-md-block">
					<h4>照片花絮</h4>
					</div>
			</div>
			<div class="carousel-item" style="overflow:hidden; height:66vh;">
				<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="..." style="filter: brightness(90%); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block">
				<h4>照片花絮</h4>
				</div>
			</div>
			<div class="carousel-item" style="overflow:hidden; height:66vh;">
				<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="..." style="filter: brightness(90%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
				<div class="carousel-caption d-none d-md-block">
				<h4>照片花絮</h4>
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
			<div class="banner-text temp_01 index_04 banner" style="padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
				<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">太子駕訓班</h1>
				<h5>桃竹駕訓的最優選擇</h5>
			</div>
		</div>
		<div class="row" style="height:20vh; justify-content:start; align-items:center;background:linear-gradient(135deg, #d3e3fc 40%,transparent 40%) center center / 100% 100%, url(./res/img/group/004.JPG) right 65% / auto 100%; background-size:cover;">
			<div class="banner-text" style="display:flex;flex-direction:column;margin-left:8rem;">
				<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">耐心</h3>
				<p>優良的用路習慣，一切從第一次開始</p>
			</div>
		</div>
	</div>
	
</div>


<!--照片花絮-->
<div class="container" >
	<div class="jumbotron" style=background-color:white>
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
						<h3 style="color:white;">場地實況</h3>
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
						<h3 style="color:white;">場地實況</h3>
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

export default function(req, res){
	res.writeHead(200, {
		"Content-Type":"text/html"
	});
	
	res.write(''+
`<html>
	<head>${PageHead()}</head>
	<body>${NavContent()} ${PageContent('')} ${FooterContent()}</body>
</html>
`);
}
