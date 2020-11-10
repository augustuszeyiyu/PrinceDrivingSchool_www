import {RuntimeData} from "/kernel/runtime.esm.js";
import {PageHead} from "./include/head.esm.js";
import {NavContent} from "./include/navbar.esm.js";
import {FooterContent} from "./include/footer.esm.js";


function PageContent(page_name) {
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
					<img src="./res/img/cour01.jpg" class="d-block w-100" alt="..." style="transform: translate(-50%, -40%)">
					<div class="carousel-caption d-none d-md-block">
					<h4 class="animate__animated animate__bounceInRight" style="font-size: 3rem; font-weight: 700;">太子駕訓班</h4>
					<p class="animate__animated animate__zoomIn" style="font-size: 1.2rem;">包容.專業.安全.耐心</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/cour02.jpg" class="d-block w-100" alt="..." >
					<div class="carousel-caption d-none d-md-block">
					<h4 style="font-size: 3rem; font-weight: 700;">太子駕訓班</h4>
					<p style="font-size: 1.2rem;">桃竹地區的最佳選擇</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/397828.jpg" class="d-block w-100" alt="..."  style="transform: translate(-50%, -30%)">
					<div class="carousel-caption d-none d-md-block">
					<h4 style="font-size: 3rem; font-weight: 700;">太子駕訓班</h4>
					<p style="font-size: 1.2rem;">30年的信賴與品質</p>
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
				<div class="banner-text temp_01 index_04 banner animate__animated animate__fadeIn" style="animation-duration: 2.5s ;padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start;">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">太子駕訓班</h1>
					<h5>桃竹駕訓的最優選擇</h5>
				</div>
			</div>
	
			<div class="row row-banner animate__animated animate__fadeInRight" style="animation-duration: 2s; background:linear-gradient(135deg, transparent 50%, #d3e3fc 60%) center center / 100% 100%, url(./res/img/group/003.JPG) right 65% / auto 100%; box-shadow: 1px 2px 2px #ccc;">
				<div class="banner-text ">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0; border-bottom:2px solid #0D7496">安全</h3>
					<p>安全是回家唯一的路</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInLeft" style="animation-duration: 2s; background:linear-gradient(135deg, #d3e3fc 35%,transparent 45%) center center / 100% 100%, url(./res/img/group/001.JPG) right center / auto 100%; box-shadow: 1px 2px 2px #ccc;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">自由</h3>
					<p>帶您享受駕駛的樂趣</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInRight" style="animation-duration: 2s; background:linear-gradient(135deg, transparent 30%, #d3e3fc 60%) center center / 100% 100%, url(./res/img/group/003.JPG) right center / auto 100%; box-shadow: 1px 2px 2px #ccc;">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">專業</h3>
					<p>學習到的知識讓您一生受用</p>
				</div>
			</div>
			<div class="row row-banner animate__animated animate__fadeInLeft" style=" animation-duration: 2s; background:linear-gradient(135deg, #d3e3fc 35%,transparent 45%) center center / 100% 100%, url(./res/img/group/004.JPG) right 65% / auto 100%; box-shadow: 1px 2px 2px #ccc);">
				<div class="banner-text">
					<h3 style="font-size:1.5rem; padding:1rem 2rem 4px 0;border-bottom:2px solid #0D7496">耐心</h3>
					<p>優良的用路習慣，一切從第一次開始</p>
				</div>
			</div>
		</div>
		
	</div>

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
			
<!--				<div class="faux-button">-->
<!--					<div class="plus-icon"></div>-->
<!--					<h5>學員BMW道路考照..</h5>-->
<!--				</div>-->
			</div>
			
			<div class="larger-copy" style="display: none; background-color:rgba(0,0,0,0.4); padding: 1rem 1.5rem;">
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
		
		
<!--					 <div class="faux-button">-->
<!--						 <div class="plus-icon"></div>-->
<!--						 <h5>專業、耐心、包容、安全</h5>-->
<!--					 </div>-->
				 </div>
		
				 <div class="larger-copy" style="display: none; background-color:rgba(0,0,0,0.4); padding: 1rem 1.5rem;">
					 <h3>專業的師資</h3>
					 <p>太子駕訓班</p>
					 <p>我們的較教練專業且充分的經驗，了解想學習駕駛的你，在學習的旅程上會遇到甚麼樣的問題，引領您掌握駕駛的技術。
					 </p>
				 </div>
			 </div>
		
			 <div class="section" target="section-three">
<!--				 <div class="label" style="opacity: 0.5;">獲獎與生活</div>-->
				 <div class="smaller-copy visible">
					 <h3>獲獎與生活</h3>
					 <p>在地經營30年，陪伴桃竹地區的一代一代的駕駛們，在駕駛的路上一起前進。</p>
		
<!--					 <div class="faux-button">-->
<!--						 <div class="plus-icon"></div>-->
<!--						 <h5>在地經營30年</h5>-->
<!--					 </div>-->
				 </div>
		
				 <div class="larger-copy" style="display:none; background-color:rgba(0,0,0,0.4); padding: 1rem 1.5rem;">
					 <h3>獲獎與生活</h3>
					 <p>太子駕訓班，在桃園中壢服務30年，陪伴這大家經過社會的發展，培育了許多的駕駛朋友，希冀在未來的日子，能陪伴大家繼續走過。</p>
				 </div>
			 </div>
		
			 <div class="accordion-background" target="start-background" style="background-image: url(./res/img/S15630561.jpg); background-size: cover; background-position:center center;"></div>
			 <div class="accordion-background" target="section-one-background" style="background-image: url(./res/img/397828.jpg); opacity: 0;"></div>
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
		</div>
	</div>
	<!--場地環境-->
	<div class="container" >
		<div class="jumbotron" style="background-color:transparent;">
			<div class="grid">
					<div class="section left top" style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/397828.jpg" style="">
		
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
		
							<h3>汽車考照區全景圖</h3>
							<p>汽車考照區，路邊停車、倒車，上坡起步</p>
							<a href="/environment" class="text-button-with-arrow">更多..</a>
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
							<a href="/environment" class="text-button-with-arrow">更多..</a>
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
							<a href="/environment" class="text-button-with-arrow">更多..</a>
						</div>
		
					</div>
		
					<div class="section right bottom " style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/space/DSC_0022.JPG" style="">
		
						<div class="text">
							<h3>場地實況</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>機車考照區</h3>
							<p>筆試區，普通重機、重機考試區</p>
							<a href="/environment" class="text-button-with-arrow">更多..</a>
						</div>
					</div>
			</div>
		</div>
	</div>
	
	<!--未分類-->
	<div class="container" style="padding-top:80px;">
		<div class="row justify-content-center" >
			<div class="col-xl-5 col-7">
				<div class="index_04 justify-content-center " style="text-align:center;">
					<h2 class="" style="font-weight:bolder;color:darkgrey;font-size:2.5rem;margin: 1rem 0 1rem 0;line-height: 4rem;">照片花絮</h2>
				</div>
			</div>
		</div>
	</div>
	<!--照片花絮-->
	<div class="container" >
		<div class="jumbotron" style="background-color:transparent;">
			<div class="grid">
					<div class="section left top" style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/pictures/S__125288456.jpg" style="">
		
						<div class="text" style="">
	<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>照片花絮</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>桃園縣警察局教育訓練</h3>
							<p>警察局教育訓練</p>
							<a href="/pictures" class="text-button-with-arrow">更多..</a>
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top " style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/DSC_0016.JPG" style="">
		
						<div class="text">
							<h3 style="color:white;">重機課程</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>大型重機</h3>
							<p>各國駕駛人,學習大型重機</p>
							<a href="/course_info_moto" class="text-button-with-arrow">更多..</a>
						</div>
					</div>
		
					<div class="section left bottom " style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/DSC_0051.JPG" style="">
		
						<div class="text">
							<h3 style="color:white;">小型車路考</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>小型車路考準備</h3>
							<p>BMW路考用車，專業教練，準備出發。</p>
							<a href="/course_info" class="text-button-with-arrow">更多..</a>
						</div>
		
					</div>
		
					<div class="section right bottom " style="animation-duration: 2s;z-index: 1;">
						<img src="./res/img/pictures/c001.JPG" style="">
		
						<div class="text">
							<h3>課程解說</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>機械結構教學</h3>
							<p>車輛結構教學，緊急事件處理解說。</p>
							<a href="/pictures" class="text-button-with-arrow">更多..</a>
						</div>
					</div>
			</div>
		</div>
	</div>
	
	<script>
		$(window).on("load",function() {
			$(window).scroll(function() {
				// var windowBottom = $(this).scrollTop() + $(this).innerHeight();
				var windowBottom = $(this).scrollTop() + ($(this).innerHeight())*0.01;

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
	<section class="" style="background-color:#0D7496;margin-top:2rem;">
		<div class="container">
			<div class="py-4 text-center" style="border-bottom:2px solid white;">
	<!--            <i class="fas fa-award" style="width:56px"></i>-->
	<!--            <p style="color:white;">medal</p>-->
				<h2 style="color:white; margin-bottom:0; padding-bottom:0;">各類獎章</h2>
			</div>
			<div elm-id="medal_section" class="row content-box justify-content-center medal medal_section">
<!--				<div class="media-img col-md-2 col-6">-->
<!--					<img class="img-fluid" src="./res/img/medal/001a.jpg" alt="獎章1">-->
<!--				</div>-->
<!--				<div class="media-img col-md-2 col-6">-->
<!--					<img class="img-fluid" src="./res/img/medal/002a.jpg" alt="獎章2">-->
<!--				</div>-->
<!--				<div class="media-img col-md-2 col-6">-->
<!--					<img class="img-fluid" src="./res/img/medal/003a.jpg" alt="獎章3">-->
<!--				</div>-->
<!--				<div class="media-img col-md-2 col-6">-->
<!--					<img class="img-fluid" src="./res/img/medal/004a.jpg" alt="獎章4">-->
<!--				</div>-->
<!--				<div class="media-img col-md-2 col-6">-->
<!--					<img class="img-fluid" src="./res/img/medal/005a.jpg" alt="獎章5">-->
<!--				</div>-->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" style="background-image:url('./res/img/medal/DSC_0003.JPG')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/DSC_0010a.jpg')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/DSC_0008.JPG')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/DSC_0004.JPG')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/004a.jpg')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/003a.jpg')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/005a.jpg')"></div>
						<div class="swiper-slide" style="background-image:url('./res/img/medal/001a.jpg')"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
<!--	<section class="test-content">-->
<!--		<div class="swiper-container">-->
<!--		  <div class="swiper-wrapper">-->
<!--			<div class="swiper-slide" style="background-image:url('https://picsum.photos/300/300?random1')"></div>-->
<!--			<div class="swiper-slide" style="background-image:url('https://picsum.photos/300/300?random2')"></div>-->
<!--			<div class="swiper-slide" style="background-image:url('https://picsum.photos/300/300?random3')"></div>-->
<!--			<div class="swiper-slide" style="background-image:url('https://picsum.photos/300/300?random4')"></div>-->
<!--			<div class="swiper-slide" style="background-image:url('https://picsum.photos/300/300?random5')"></div>-->
<!--		  </div>-->
<!--		</div>-->
<!--	</section>-->
<!--	-->
<!--	<section>-->
<!--&lt;!&ndash;	 <div class="container">&ndash;&gt;-->
<!--&lt;!&ndash;		<div class="row">&ndash;&gt;-->
<!--	  		<div class="news-area">-->
<!--				<div class="triangle-area">-->
<!--					<div class="news-txt-area grid-container">-->
<!--						<div class="title"><p class="large">最新消息</p></div>-->
<!--						<div class="sub-title"><p class="middle">NEWS</p></div>-->
<!--						<div class="card-content">-->
<!--							<div class="news-swiper">-->
<!--								<div class="swiper-wrapper">-->
<!--									<div class="swiper-slide">-->
<!--										<a href="">-->
<!--										<div class="slide-box">-->
<!--											<div class="image">-->
<!--												<img src="./res/img/medal/001a.jpg">-->
<!--											</div>-->
<!--											<div class="line"></div>-->
<!--											<div class="date "><p class="normal"></p></div>-->
<!--											<div class="title"><p class="normal"></p></div>-->
<!--											<div class="content "><p class="normal"></p></div>-->
<!--										</div>-->
<!--										</a>-->
<!--									</div>-->
<!--									-->
<!--									 <div class="swiper-slide">-->
<!--										<a href="">-->
<!--										<div class="slide-box">-->
<!--											<div class="image">-->
<!--												<img src="./res/img/medal/002a.jpg">-->
<!--											</div>-->
<!--											<div class="line"></div>-->
<!--											<div class="date "><p class="normal"></p></div>-->
<!--											<div class="title"><p class="normal"></p></div>-->
<!--											<div class="content "><p class="normal"></p></div>-->
<!--										</div>-->
<!--										</a>-->
<!--									</div>-->
<!--									-->
<!--									 <div class="swiper-slide">-->
<!--										<a href="">-->
<!--										<div class="slide-box">-->
<!--											<div class="image">-->
<!--												<img src="./res/img/medal/003a.jpg">-->
<!--											</div>-->
<!--											<div class="line"></div>-->
<!--											<div class="date "><p class="normal"></p></div>-->
<!--											<div class="title"><p class="normal"></p></div>-->
<!--											<div class="content "><p class="normal"></p></div>-->
<!--										</div>-->
<!--										</a>-->
<!--									</div>-->
<!--									-->
<!--									 <div class="swiper-slide">-->
<!--										<a href="">-->
<!--										<div class="slide-box">-->
<!--											<div class="image">-->
<!--												<img src="./res/img/medal/004a.jpg">-->
<!--											</div>-->
<!--											<div class="line"></div>-->
<!--											<div class="date "><p class="normal"></p></div>-->
<!--											<div class="title"><p class="normal"></p></div>-->
<!--											<div class="content "><p class="normal"></p></div>-->
<!--										</div>-->
<!--										</a>-->
<!--									</div>-->
<!--		-->
<!--								</div>-->
<!--								&lt;!&ndash; Arrows &ndash;&gt;-->
<!--								<div class="swiper-button-next">-->
<!--									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">-->
<!--										<path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z">-->
<!--									</svg>-->
<!--								</div>-->
<!--								<div class="swiper-button-prev">-->
<!--									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">-->
<!--										<path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z">-->
<!--									</svg>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--						<div class="news-more">-->
<!--							<a href="news_list.php">-->
<!--								<p class="middle-down">觀看全部-->
<!--									<br> VIEW ALL-->
<!--								</p>-->
<!--							</a>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--&lt;!&ndash;    	</div>&ndash;&gt;-->
<!--&lt;!&ndash;	 </div>&ndash;&gt;-->
<!--&lt;!&ndash;	&ndash;&gt;-->
<!--	</section>-->
<!--	-->
	<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
	<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
       const mySwiper = new Swiper('.swiper-container', {
		  effect: 'coverflow',
		  slidesPerView: 'auto',
		  centeredSlides: true,
		  initialSlide:2,
		});
		
		var swiper_news = new Swiper('.news-swiper', {
            slidesPerView: 3,
            initialSlide: 1,
            spaceBetween: 30,
            loop:true,
            speed: 800,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                559: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    </script>
	
	</html>
`;
}
// const PageScript = BuildTemplate(String.stringTemplate`
// 	<script type="module">
// 		import {WebFetch} from "/node_modules/jsboost/web-fetch.esm.js";
//
// 		const {HTMLElementAccessor, HTMLElementTemplate} = ExtES;
// 		var addm = viewport.medal_section.createElement('div');
// 		var testcontent = document.createTextNode("This is new.");
// 		addm.appendChild(testcontent);
// 	</script>
// `); //End PageScript

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
	.swiper-container {
		  width: 100%;
		}
		
		.swiper-slide {
		  width: 240px!important;
		  height: 280px;
		  background-repeat: no-repeat;
		  background-position: center center;
		  background-size: cover;
		}
	.swiper-container .swiper-wrapper{
		display: flex;
	}
	.swiper-slide .slide-box .image img{
		width:100px;
	}
	
	
	
	.carousel-caption{
		bottom:50px;
	}
	.carousel-content{
		box-shadow: 0 15px 15px 2px #ccc;
	}
	
	.carousel-item{
		 overflow:hidden;
		 height:calc(100vw*0.6);
	}
		.carousel-item img{
			filter: brightness(85%); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
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
		<body>${NavContent()} ${PageContent('index')} ${FooterContent()}</body>
	 </html>
	`);
}
