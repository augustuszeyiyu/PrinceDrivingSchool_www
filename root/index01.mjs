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
						<img src="./res/img/tz793.jpg" class="d-block w-100" alt="..." >
						<div class="carousel-caption d-none d-md-block">
						<h4 class="animate__animated animate__zoomIn">太子駕訓班</h4>
						<p class="animate__animated animate__zoomIn">包容.專業.安全.耐心</p>
						</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/tz0143.JPG" class="d-block w-100" alt="..." >
					<div class="carousel-caption d-none d-md-block">
					<h4>太子駕訓班</h4>
					<p>30年的信賴與品質</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/tzd01.JPG" class="d-block w-100" alt="..." >
					<div class="carousel-caption d-none d-md-block">
					<h4>太子駕訓班</h4>
					<p>桃竹地區的最佳選擇</p>
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
		
	<!--未分類-->
	<div class="temp_01" style="overflow:hidden">
		<div class="container ">
			<div class="row justify-content-center" >
				<div class="banner-text temp_01 index_04 banner animate__animated animate__fadeIn" style="animation-duration: 2.5s ;padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">太子駕訓班</h1>
					<h5>桃竹駕訓的最優選擇</h5>
				</div>
			</div>
	
			<div class="row row-banner animate__animated animate__fadeInRight" style="animation-duration: 2s; background:linear-gradient(135deg, transparent 50%, #d3e3fc 60%) center center / 100% 100%, url(./res/img/group/003.JPG) right 65% / auto 100%;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0; border-bottom:2px solid #0D7496">安全</h3>
					<p>安全是回家唯一的路</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInLeft" style="animation-duration: 2s; background:linear-gradient(135deg, #d3e3fc 35%,transparent 45%) center center / 100% 100%, url(./res/img/group/001.JPG) right center / auto 100%;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">自由</h3>
					<p>帶您享受駕駛的樂趣</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInRight" style="animation-duration: 2s; background:linear-gradient(135deg, transparent 30%, #d3e3fc 60%) center center / 100% 100%, url(./res/img/group/003.JPG) right center / auto 100%;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">專業</h3>
					<p>學習到的知識讓您一生受用</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInLeft" style="animation-duration: 2s; background:linear-gradient(135deg, #d3e3fc 35%,transparent 45%) center center / 100% 100%, url(./res/img/group/004.JPG) right 65% / auto 100%;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">耐心</h3>
					<p>優良的用路習慣，一切從第一次開始</p>
				</div>
			</div>
		</div>
		
	</div>
	<!--Introduction-->
	<!--	<div class = "container">
	
			<div class="header temp_01">
				<div class="row index_01">
					<div class="col-lg-3 col-sm-6 info_elm">
						<div class="elm01-header">駕訓班介紹<span>about</span></div>
						<img src="/res/img/pic_8991_3.jpg" alt="" >
						<a href="OLD/programs.html"><b>駕訓班介紹</b><span>太子駕訓班</span></a>
					</div>
					<div class="col-lg-3 col-sm-6 info_elm">
						<div class="elm01-header">專業的師資<span>Teacher</span></div>
						<img src="/res/img/pic_8991_3.jpg" alt="" >
						<a href="OLD/programs.html"><b>專業的師資</b><span>太子駕訓班</span></a>
					</div>
					<div class="col-lg-3 col-sm-6 info_elm">
						<div class="elm01-header">照片花絮<span>behind</span></div>
						<img src="/res/img/pic_8991_3.jpg" alt="" >
						<a href="OLD/programs.html"><b>照片花絮</b><span>太子駕訓班</span></a>
					</div>
					<div class="col-lg-3 col-sm-6 info_elm">
						<div class="elm01-header">模擬測驗<span>test</span></div>
						<img src="/res/img/pic_8991_3.jpg" alt="" >
						<a href="OLD/programs.html"><b>模擬測驗</b><span>太子駕訓班</span></a>
					</div>
				</div>
			</div>
	
	
	
			<div class="row justify-content-center temp_01">
				<div class="index_02 col-10">
					<div>
						<h3>專業的選擇</h3>
						<h1>太子駕訓班</h1>
						<p>
							320桃園市中壢區後寮二路339號<a href="FB" >親切與專業教練，然您在學習的時候不會懼怕，慢慢引導您掌握"駕駛"的"樂趣"與"方法"</a>
						</p>
					</div>
				</div>
			</div>
		
	
			<div class="row justify-content-center">
				<div class="col-10 justify-content-center temp_01" >
						<div class="index_04" style="height:auto;">
							<div class="index_04_title">太子駕訓班</div>
						</div>
				</div>
			</div>
		</div>-->
	
	<!--Part A-->
	<div class="" >
		<div class="horizontal-accordion">
			<img class="close-icon desktop-visible" src="./res/img/delete-icon-black.png">
		
			 <div class="section" target="section-one">
		
				<div class="label" style="opacity: 0;">環境與設施</div>
		
				<div class="smaller-copy visible">
					<h3>環境與設施</h3>
					<p class="">良好的環境與設施能事半功倍的讓您長或駕駛技術，在專業的教授幫助下，讓您在駕駛學習的歷程上更安全，熟練的掌握駕駛技術。
					</p>
		
					<div class="faux-button">
						<div class="plus-icon"></div>
						<h5>學員BMW道路考照..</h5>
					</div>
				</div>
		
				<div class="larger-copy" style="display: none;">
					<h3>環境與設施</h3>
					<p>太子駕訓班</p>
					<p> 1.優秀寬敞的環境<br>
						2.全新BMW路考用車<br>
						3.在原場地考試<br>
					<a href="/environment"><h5></h5></a>
				</div>
			</div>
			<div class="section" target="section-two">
				<!--<div class="label" style="opacity: 0;">專業的師資</div>-->
				 <div class="smaller-copy visible">
					 <h3>專業的師資</h3>
					 <p class="">
						 <br>耐心：在初次學習駕駛時，讓你不會感到害怕，恐慌。
						 <br>包容：不同的背景、與熟練度都在教練的掌握中。
						 <br>專業：在太子駕訓的課程中，讓您掌握一輩子受用的知識。
						 <br>安全：知識是掌握駕駛能力的關鍵。
					 </p>
		
		
					 <div class="faux-button">
						 <div class="plus-icon"></div>
						 <h5>專業、耐心、包容、安全</h5>
					 </div>
				 </div>
		
				 <div class="larger-copy" style="display: none;">
					 <h3>專業的師資</h3>
					 <p>太子駕訓班</p>
					 <p>我們的較教練專業且充分的經驗，了解想學習駕駛的你，在學習的旅程上會遇到甚麼樣的問題，引領您掌握駕駛的技術。
					 </p>
				 </div>
			 </div>
		
			 <div class="section" target="section-three">
				 <!--<div class="label" style="opacity: 0;">獲獎與生活</div>-->
				 <div class="smaller-copy visible">
					 <h3>獲獎與生活</h3>
					 <p>在地經營30年，陪伴桃竹地區的一代一代的駕駛們，在駕駛的路上一起前進。</p>
		
					 <div class="faux-button">
						 <div class="plus-icon"></div>
<!--						 <h5>更多資訊</h5>-->
					 </div>
				 </div>
		
				 <div class="larger-copy" style="display: none;">
					 <h3>獲獎與生活</h3>
					 <p>太子駕訓班，在桃園中壢服務30年，陪伴這大家經過社會的發展，培育了許多的駕駛朋友，希冀在未來的日子，能陪伴大家繼續走過。</p>
				 </div>
			 </div>
		
			 <div class="accordion-background" target="start-background" style="background-image: url(./res/img/S15630561.jpg); background-size: cover; background-position:center center;"></div>
			 <div class="accordion-background" target="section-one-background" style="background-image: url(./res/img/space/004.JPG); opacity: 0;"></div>
			 <div class="accordion-background" target="section-two-background" style="background-image: url(./res/img/group/001.JPG); opacity: 0;"></div>
			 <div class="accordion-background" target="section-three-background" style="background-image: url(./res/img/group/006.jpg); opacity: 0;"></div>
	<!--		 <div class="accordion-background" target="section-four-background" style="background-image: url(./res/img/S15630608.jpg); opacity: 0;"></div>-->
		 </div>
	</div>
	
	 <script src="./res/js/custom.js"></script>
		
	<!--未分類-->
	<div class="container" style="padding-top:80px;">
		<div class="row justify-content-center" >
			<div class="col-xl-5 col-7">
				<div class="index_04 justify-content-center " style="text-align:center;">
					<h2 class="" style="font-weight:bolder;color:darkgrey;font-size:2.5rem;margin: 1rem 0 1rem 0;line-height: 4rem;">場地環境</h2>
				</div>
			</div>
			
	<!--
				<div class="blog col-xl-6 col-sm-12">
					<h3><a href="">內容</a></h3>
					<ul >
						<li >
							<p>
								<a href="">一</a>
							</p>
						</li>
						<li>
							<p>
								<a href="">二</a>
							</p>
						</li>
						<li>
							<p>
								<a href="">三</a>
							</p>
						</li>
					</ul>
				</div>
				<div class="article col-xl-6 col-sm-12">
					<h3><a href="">開課時間</a></h3>
					<ul>
						<li class="row">
							<div class="col-2">
								<span><b>4-28</b></span>
							</div>
							<p class="col-10">
								<a href="">詳細課程內容</a>
							</p>
						</li>
						<li class="row">
							<div class="col-2">
								<span><b>8-21</b></span>
							</div>
							<p class="col-10">
								<a href="">詳細課程內容</a>
							</p>
						</li>
							<li class="row">
							<div class="col-2">
								<span><b>12-33</b></span>
							</div>
							<p class="col-10">
								<a href="">詳細課程內容</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="row justify-content-center">
				<div class="row col-11 justify-content-center temp_01">
					<div class="col-xl-6 col-sm-12">
						<div class="index_03">
							<div class="index_03_img"><img src="/res/img/cp02.jpg"></div>
							<div class="index_03_info">
								<div class="title">場內環境</div>
								<div class="info_03">內容</div>
							</div>
						</div>
						<div class="index_03">
							<div class="index_03_img"><img src="/res/img/cp02.jpg"></div>
							<div class="index_03_info">
								<div class="title" style="background-color:dodgerblue">場內環境</div>
								<div class="info_03">內容</div>
							</div>
						</div>
						<div class="index_03">
							<div class="index_03_img"><img src="/res/img/cp02.jpg"></div>
							<div class="index_03_info">
								<div class="title" style="background-color:greenyellow">場內環境</div>
								<div class="info_03">內容</div>
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12" style="padding:0.5rem 15px;">
						<div class="index_04">
							<div class="index_04_title">About</div>
							<div class="index_04_img"><img src="/res/img/cp02.jpg"></div>
							<div class="index_04_info"><p>太子駕訓班太子駕訓班太子駕訓班</p></div>
						</div>
					</div>
				</div>
			</div>-->
		</div>
	</div>
	<!--場地環境-->
	<div class="container" >
		<div class="jumbotron " style=background-color:white>
			<div class="grid">
					<div class="section left top" style="animation-duration: 2s;z-index: 1;">
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
							<a href="environment.mjs" class="text-button-with-arrow">更多..</a>
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top " style="animation-duration: 2s;z-index: 1;">
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
							<a href="environment.mjs" class="text-button-with-arrow">更多..</a>
						</div>
					</div>
		
					<div class="section left bottom " style="animation-duration: 2s;z-index: 1;">
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
							<a href="environment.mjs" class="text-button-with-arrow">更多..</a>
						</div>
		
					</div>
		
					<div class="section right bottom " style="animation-duration: 2s;z-index: 1;">
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
							<a href="environment.mjs" class="text-button-with-arrow">更多..</a>
						</div>
					</div>
			</div>
		</div>
	</div>
	<script>
		$(window).on("load",function() {
			$(window).scroll(function() {
				// var windowBottom = $(this).scrollTop() + $(this).innerHeight();
				var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*0.1;

				$(".grid .section").each(function() {
				  /* Check the location of each desired element */
				  var objectBottom = $(".grid").offset().top + $(this).outerHeight();
				  console.log(objectBottom,windowBottom);
				  
				  /* If the element is completely within bounds of the window, fade it in */
				  if (objectBottom < windowBottom) { //object comes into view (scrolling down)
					// if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
						$(this).addClass("animate__animated").addClass("animate__zoomIn");
				  } else { //object goes out of view (scrolling up)
						$(this).removeClass("animate__animated").removeClass("animate__zoomIn");
				  }
				});
			}); //invoke scroll-handler on page-load
		});
	
	</script>
	<script src="./res/js/home.js"></script>
	
	<!--各類獎章-->
	<section class="" style="background-color:#0D7496;">
		<div class="container">
			<div class="py-4 text-center" style="border-bottom:2px solid white;">
	<!--            <i class="fas fa-award" style="width:56px"></i>-->
	<!--            <p style="color:white;">medal</p>-->
				<h2 style="color:white; margin-bottom:0; padding-bottom:0;">各類獎章</h2>
			</div>
			<div class="row content-box justify-content-center medal">
				<div class="media-img col-md-2 col-6">
					<img class="img-fluid" src="./res/img/medal/001a.jpg" alt="獎章1">
				</div>
				<div class="media-img col-md-2 col-6">
					<img class="img-fluid" src="./res/img/medal/002a.jpg" alt="獎章2">
				</div>
				<div class="media-img col-md-2 col-6">
					<img class="img-fluid" src="./res/img/medal/003a.jpg" alt="獎章3">
				</div>
				<div class="media-img col-md-2 col-6">
					<img class="img-fluid" src="./res/img/medal/004a.jpg" alt="獎章4">
				</div>
				<div class="media-img col-md-2 col-6">
					<img class="img-fluid" src="./res/img/medal/005a.jpg" alt="獎章5">
				</div>
			</div>
		</div>
	</section>
	<div class='section'>${MsgBoard(req.info.url.path)}</div>
	
	<!--未分類-->
	<!--
	<div class="container">
			<div class="row justify-content-center temp_01" >
				<div class="col-12 ">
					<div class=" index_05_title">師資陣容</div>
				</div>
				<div class="col-11 row index_05_content">
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					<div class="col-xl-6 col-sm-12 index_05_img_cont">
						<div class="content_title">老師姓名</div>
						<div class="img_c03">
							<div class="img_c01">
								<img src="/res/img/cp02.jpg">
							</div>
							<div class="img_c02">
								<img src="/res/img/cp02.jpg">
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
	-->
	
	
	</body>
	</html>
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
		 height:calc(100vw*0.6);
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
			 height:calc(100vw*0.66*0.6);
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
	<body>${NavContent()} ${PageContent(req, 'index')} ${FooterContent()}</body>
</html>
`);
}
