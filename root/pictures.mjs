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
				<img src="./res/img/S__125288453.jpg" class="d-block w-100" alt="..." >
				<div class="carousel-caption d-none d-md-block">
				<h2>照片花絮</h2>
<!--					<p>包容.專業.安全.耐心</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/team5.jpg" class="d-block w-100" alt="..." style="transform: translate(-50%, -55%)">
				<div class="carousel-caption d-none d-md-block">
				<h2>照片花絮</h2>
<!--				<p>年的信賴與品質</p>-->
				</div>
			</div>
			<div class="carousel-item">
				<img src="./res/img/pictures/103-3.jpg" class="d-block w-100" alt="...">
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
	
<!-- panel -->
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
	<div class="pictures">
<!--Part 11 -->
		<div class="container" style="background-color:rgba(13,116,150,0.5);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(229,239,227,1); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">桃園縣警察局教育訓練</h2>
				</div>
			</div>
			
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/S__125288452.jpg" >
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>桃園縣警察局教育訓練</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>警察局訓練</h3>
							<p>桃園縣警察局</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/S__125288454.jpg">
						<div class="text">
							<h3>桃園縣警察局教育訓練</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>警察局訓練</h3>
							<p>桃園縣警察局</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/S__125288453.jpg" >
						<div class="text">
							<h3>桃園縣警察局教育訓練</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>警察局訓練</h3>
							<p>桃園縣警察局</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/S__125288456.jpg">
						<div class="text">
							<h3>桃園縣警察局教育訓練</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>警察局訓練</h3>
							<p>桃園縣警察局</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
					
				</div>
			</div>
		</div>
	<!--Part 12 -->
		<div class="container" style="background-color:rgba(211,227,252,1);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(13,116,150,0.5); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">學員互動</h2>
				</div>
			</div>
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/t002.jpg" >
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>學員互動</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>恭喜獲得重機駕照</h3>
		<!--						<p>筆試區，普通重機、重機考試區</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/DSC_0016.JPG">
						<div class="text">
							<h3>大型重機</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>太子駕訓服務各國駕駛人獲得駕照</h3>
		<!--						<p>多種類別教練用車</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/DSC_0085.JPG" >
						<div class="text">
							<h3>課後解說</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>課程後，針對個人駕駛狀況解說改善</h3>
		<!--						<p>BMW路考用車，專業教練</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/IMG_1953.jpg">
						<div class="text">
							<h3>室內課程</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>交通規則，應注意事項課程</h3>
		<!--						<p>汽車考照區，路邊停車、倒車，上坡起步</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
				
				</div>
			</div>
		</div>
<!--Part 1 -->
<!--
	Color-Reserve
	background-color:rgba(211,227,252,0.6)
	background-color:rgba(13,116,150,0.5)#0D7496
 -->
		<div class="container" style="background-color:rgba(13,116,150,0.5);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(229,239,227,1); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">幼兒交通安全參訪</h2>
				</div>
			</div>
			
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/001.jpg" >
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>幼兒交通安全參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>交通禮儀與行人安全</h3>
							<p>通過斑馬線、行人通道等，應注規則與禮儀</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/002.jpg">
						<div class="text">
							<h3>幼兒交通安全參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>分組訓練</h3>
							<p>分組訓練，教學後親自解說</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/004.jpg" >
						<div class="text">
							<h3>幼兒交通安全參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>實地教學</h3>
							<p>了解道路上各種標線與規則</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/003a.jpg">
						<div class="text">
							<h3>幼兒交通安全參訪</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>室內課程</h3>
							<p>室內課程，交通號誌、交通規則等教學</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
					
				</div>
			</div>
		</div>

<!--Part 2 -->
		<div class="container" style="background-color:rgba(211,227,252,1);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(13,116,150,0.5); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">機械結構教學</h2>
				</div>
			</div>
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/c001.JPG" >
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>解說備胎位置</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>解說備胎與千斤頂的位置</h3>
		<!--						<p>筆試區，普通重機、重機考試區</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/c004.JPG">
						<div class="text">
							<h3>解說千斤頂使用方法</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>解說千斤頂使用方法,與使用事項</h3>
		<!--						<p>多種類別教練用車</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/c003.JPG" >
						<div class="text">
							<h3>動力室解說</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>上路前5油三水的檢查與機械解說</h3>
		<!--						<p>BMW路考用車，專業教練</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/c002.JPG">
						<div class="text">
							<h3>胎紋解說</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>胎紋深淺、紋路辨別與注意事項</h3>
		<!--						<p>汽車考照區，路邊停車、倒車，上坡起步</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
				
				</div>
			</div>
		</div>

<!--Paet 3-->
		<div class="container" style="background-color:rgba(13,116,150,0.5);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center;background-color:rgba(229,239,227,1); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">員工生活</h2>
				</div>
			</div>
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/t003.JPG" >
		
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>員工在職教學</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>動力車輛系統解說</h3>
							<p>剎車系統，引擎動力系統</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/t004.JPG">
		
						<div class="text">
							<h3>員工在職教學</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>分組訓練</h3>
							<p>室內解說課程</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/t001.jpg" >
		
						<div class="text">
							<h3>員工旅遊</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>員工旅遊</h3>
							<p>員工旅遊</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/IMG_0685.JPG">
		
						<div class="text">
							<h3>員工福利</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>員工福利</h3>
							<p>員工旅遊、長灘島</p>
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
				
				</div>
			</div>
		</div>

<!--Part 4 -->
		<div class="container" style="background-color:rgba(211,227,252,1);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(13,116,150,0.5); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">員工生活</h2>
				</div>
			</div>
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/1069744.jpg" >
		
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>員工旅遊</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>黑部立山</h3>
		<!--						<p>筆試區，普通重機、重機考試區</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/103-4.jpg">
		
						<div class="text">
							<h3>員工旅遊</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>黑部立山,白川鄉</h3>
		<!--						<p>多種類別教練用車</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/S_6F66.jpg" >
		
						<div class="text">
							<h3>員工旅遊</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>馬來西亞</h3>
		<!--						<p>BMW路考用車，專業教練</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/NONO.JPG">
		
						<div class="text">
							<h3>員工旅遊</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>菲律賓、宿霧</h3>
		<!--						<p>汽車考照區，路邊停車、倒車，上坡起步</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
				
				</div>
			</div>
		</div>
		
<!--Part 5 -->
	<div class="container" style="background-color:rgba(13,116,150,0.5);">
			<div style="padding:2rem;">
				<div style=" width:100%; text-align:center; background-color:rgba(229,239,227,1); padding:2rem 0; border-radius:1rem;">
					<h2 style="padding-bottom:0;margin-bottom:0;">安徽同業參訪</h2>
				</div>
			</div>
			<div class="jumbotron" style="background-color:transparent">
				<div class="grid">
					<div class="section left top" style="z-index: 1;">
						<img src="./res/img/pictures/a001.JPG" >
		
						<div class="text">
		<!--					<div class="text" style="opacity: 0.2;">-->
							<h3>安徽同業參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
		
							<h3>室內歡迎討論會</h3>
		<!--						<p>筆試區，普通重機、重機考試區</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
							<!--/industries/agriculture-->
						</div>
					</div>
		
					<div class="section right top" style="z-index: 1;">
						<img src="./res/img/pictures/a002.JPG">
		
						<div class="text">
							<h3>安徽同業參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>教學專用車解說</h3>
		<!--						<p>多種類別教練用車</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
					</div>
		
					<div class="section left bottom" style="z-index: 1;">
						<img src="./res/img/pictures/a003.JPG" >
		
						<div class="text">
							<h3>安徽同業參訪</h3>
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%;">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>同業合照</h3>
		<!--						<p>BMW路考用車，專業教練</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
						</div>
		
					</div>
		
					<div class="section right bottom" style="z-index: 1;">
						<img src="./res/img/pictures/a004.JPG">
		
						<div class="text">
							<h3>安徽同業參訪</h3>
		
							<div class="faux-button">
								<div class="plus-icon"></div>
								<h5>more..</h5>
							</div>
						</div>
		
						<div class="copy" style="opacity: 0; z-index: 0; width: 100%">
							<img class="close-icon" src="./res/img/delete-icon-black.png">
							<h3>團體合照</h3>
		<!--						<p>汽車考照區，路邊停車、倒車，上坡起步</p>-->
		<!--						<a href="./environment.html" class="text-button-with-arrow">更多..</a>-->
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
