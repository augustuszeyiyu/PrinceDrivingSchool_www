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
					<img src="./res/img/DSC_0055.JPG" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h2>課程介紹</h2>
	<!--				<p>桃竹地區的最佳選擇</p>-->
					</div>
				</div>
				<div class="carousel-item">
					<img src="./res/img/DSC_0048.JPG" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h2>課程介紹</h2>
	<!--				<p>年的信賴與品質</p>-->
					</div>
				</div>
				<div class="carousel-item ">
					<img src="./res/img/S15630561.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption d-none d-md-block">
					<h2>課�?介紹</h2>
	<!--					<p>包容.專業.安全.耐心</p>-->
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
				<div class="banner-text temp_01 index_04 banner" style="background-color:d3e3fc!important; padding:1rem 80px 1rem 80px; display:flex;flex-direction:column;justify-content:center;align-items:start; border: solid #0D7496;">
					<h1 style="font-size:3rem;border-bottom:2px solid #0D7496; color:#0D7496;font-weight:bold;padding-bottom:0.2rem;">普通小型車</h1>
					<h4 style="text-align:center;width:100%">太子駕訓</h4>
				</div>
			</div>
		</div>
		
	</div>
	
	<div class="container">
<!--		<div style="padding:10px 0"><h4 style="color:#ec3939;">因應疫情警戒期間中斷課程，調整下半年多期課程結業時間，請各位學員留意，以保障各位學員權益。</h4></div>-->
		<ul class="nav nav-pills mb-3" id="pills-tab-110-car" role="tablist">
			<li class="nav-item" role="presentation">
				<a class="nav-link active" id="pills-110-01" data-toggle="pill" href="#pills-contact-110-01" role="tab" aria-controls="pills-home" aria-selected="true">第一季(一月~三月)</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-110-02" data-toggle="pill" href="#pills-contact-110-02" role="tab" aria-controls="pills-profile" aria-selected="false">第二季(四月~六月)</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-110-03" data-toggle="pill" href="#pills-contact-110-03" role="tab" aria-controls="pills-contact" aria-selected="false">第三季(七月~九月)</a>
			</li>
			<li class="nav-item" role="presentation">
				<a class="nav-link" id="pills-110-04" data-toggle="pill" href="#pills-contact-110-04" role="tab" aria-controls="pills-contact" aria-selected="false">第四季(十月~十二月)</a>
			</li>
		</ul>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show active" id="pills-contact-110-01" role="tabpanel" aria-labelledby="pills-home-tab">
				<div class="table">
					<div class='t-head'>
						<div class='t-column'>期(梯)數</div>
						<div class='t-column'>期別</div>
						<div class='t-column'>開訓日期</div>
						<div class='t-column'>結訓日期</div>
						<div class='t-column'>備註</div>
					</div>
					<div class="t-body">
						<div class="t-row">
							<div class="t-column">1</div>
							<div class="t-column">298B</div>
							<div class="t-column">111/01/04</div>
							<div class="t-column">111/02/11</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">2</div>
							<div class="t-column">298C</div>
							<div class="t-column">111/01/15</div>
							<div class="t-column">111/02/23</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">3</div>
							<div class="t-column">299A</div>
							<div class="t-column">111/01/27</div>
							<div class="t-column">111/03/07</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">4</div>
							<div class="t-column">299B</div>
							<div class="t-column">111/02/12</div>
							<div class="t-column">111/03/18</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">5</div>
							<div class="t-column">299C</div>
							<div class="t-column">111/02/24</div>
							<div class="t-column">111/03/30</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">6</div>
							<div class="t-column">300A</div>
							<div class="t-column">111/03/08</div>
							<div class="t-column">111/04/11</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">7</div>
							<div class="t-column">300B</div>
							<div class="t-column">111/03/19</div>
							<div class="t-column">111/04/22</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">8</div>
							<div class="t-column">300C</div>
							<div class="t-column">111/03/31</div>
							<div class="t-column">111/05/04</div>
							<div class="t-column"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pills-contact-110-02" role="tabpanel" aria-labelledby="pills-profile-tab">
				<div class="table">
					<div class='t-head'>
						<div class='t-column'>期(梯)數</div>
						<div class='t-column'>期別</div>
						<div class='t-column'>開訓日期</div>
						<div class='t-column'>結訓日期</div>
						<div class='t-column'>備註</div>
					</div>
					<div class="t-body">
						<div class="t-row">
							<div class="t-column">9</div>
							<div class="t-column">301A</div>
							<div class="t-column">111/04/12</div>
							<div class="t-column">111/05/16</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">10</div>
							<div class="t-column">301B</div>
							<div class="t-column">111/04/23</div>
							<div class="t-column">111/05/27</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">11</div>
							<div class="t-column">301C</div>
							<div class="t-column">111/05/05</div>
							<div class="t-column">111/06/08</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">12</div>
							<div class="t-column">302A</div>
							<div class="t-column">111/05/17</div>
							<div class="t-column">111/06/20</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">13</div>
							<div class="t-column">302B</div>
							<div class="t-column">111/05/28</div>
							<div class="t-column">111/07/01</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">14</div>
							<div class="t-column">302C</div>
							<div class="t-column">111/06/09</div>
							<div class="t-column">111/07/13</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">15</div>
							<div class="t-column">303A</div>
							<div class="t-column">111/06/21</div>
							<div class="t-column">111/07/25</div>
							<div class="t-column"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pills-contact-110-03" role="tabpanel" aria-labelledby="pills-contact-tab">
				<div class="table">
					<div class='t-head'>
						<div class='t-column'>期(梯)數</div>
						<div class='t-column'>期別</div>
						<div class='t-column'>開訓日期</div>
						<div class='t-column'>結訓日期</div>
						<div class='t-column'>備註</div>
					</div>
					<div class="t-body">
						<div class="t-row">
							<div class="t-column">16</div>
							<div class="t-column">303B</div>
							<div class="t-column">111/07/02</div>
							<div class="t-column">111/08/05</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">17</div>
							<div class="t-column">303C</div>
							<div class="t-column">111/07/14</div>
							<div class="t-column">111/08/17</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">18</div>
							<div class="t-column">304A</div>
							<div class="t-column">111/07/26</div>
							<div class="t-column">111/08/29</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">19</div>
							<div class="t-column">304B</div>
							<div class="t-column">111/08/06</div>
							<div class="t-column">111/09/09</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">20</div>
							<div class="t-column">304C</div>
							<div class="t-column">111/08/18</div>
							<div class="t-column">111/09/21</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">21</div>
							<div class="t-column">305A</div>
							<div class="t-column">111/08/30</div>
							<div class="t-column">111/10/03</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">22</div>
							<div class="t-column">305B</div>
							<div class="t-column">111/09/10</div>
							<div class="t-column">111/10/14</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">23</div>
							<div class="t-column">305C</div>
							<div class="t-column">111/09/22</div>
							<div class="t-column">111/10/26</div>
							<div class="t-column"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pills-contact-110-04" role="tabpanel" aria-labelledby="pills-contact-tab">
				<div class="table">
					<div class='t-head'>
						<div class='t-column'>期(梯)數</div>
						<div class='t-column'>期別</div>
						<div class='t-column'>開訓日期</div>
						<div class='t-column'>結訓日期</div>
						<div class='t-column'>備註</div>
					</div>
					<div class="t-body">
						<div class="t-row">
							<div class="t-column">24</div>
							<div class="t-column">306A</div>
							<div class="t-column">111/10/04</div>
							<div class="t-column">111/11/07</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">25</div>
							<div class="t-column">306B</div>
							<div class="t-column">111/10/15</div>
							<div class="t-column">111/11/18</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">26</div>
							<div class="t-column">306C</div>
							<div class="t-column">111/10/27</div>
							<div class="t-column">111/11/30</div>
							<div class="t-column"></div>
						</div>	
						<div class="t-row">
							<div class="t-column">27</div>
							<div class="t-column">307A</div>
							<div class="t-column">111/11/08</div>
							<div class="t-column">111/12/12</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">28</div>
							<div class="t-column">307B</div>
							<div class="t-column">111/11/19</div>
							<div class="t-column">111/12/23</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">29</div>
							<div class="t-column">307C</div>
							<div class="t-column">111/12/01</div>
							<div class="t-column">111/01/04</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">30</div>
							<div class="t-column">308A</div>
							<div class="t-column">111/12/13</div>
							<div class="t-column">111/01/16</div>
							<div class="t-column"></div>
						</div>
						<div class="t-row">
							<div class="t-column">31</div>
							<div class="t-column">308B</div>
							<div class="t-column">111/12/24</div>
							<div class="t-column">111/01/27</div>
							<div class="t-column"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</div>
	
	<div class="container">
		<div class="row justify-content-center" >
		
		</div>
		<div class="row justify-content-center">
			<div class="col-9">
				<div class="section">
					<h4 class="title">(一) 報名資料 [ 普通小型車 ]</h4>
					<p>1. 體檢表 2. 身分證 3. 一吋正面相片共6張(體檢2張、報名4張) 4. 代辦規費(請自備零錢) 5. 契約書</p>
				</div>
				<div class="section">
					<h4 class="title">(二) 辦理體檢手續</h4>
					<p>一. 請準備一吋正面光面相同樣式相片2張(醫院體檢使用)(請勿自行列印)</p>
					<p>二. 攜帶執照登記書(體檢表)、照片二張及身分證正本到 :</p>
					<p>&emsp; &emsp; 1. 懷寧醫院(中壢區志廣路119號)&emsp; 電話:四九一九一一九</p>
					<p>&emsp; &emsp; 2. 永大診所(中壢區延平路四二三號)&emsp; 電話:四二六八三九九</p>
					<p>&emsp; &emsp; 3. 華揚醫院(中壢區中北路二段三一六號)&emsp; 電話:四五七七二OO ~ 一OO五</p>
					<p>&emsp; &emsp; 4. 新國民綜合醫院(中壢區復興路一五二號)&emsp; 電話:四二二五一八O</p>
					<p>&emsp; &emsp; 5. 祐民醫院(中壢區民族路二段一八O號)&emsp; 電話:四九一五六五六</p>
					
				</div>
				<div class="section">
					<h4 class="title">(三)課程與費用</h4>
					<h5 style="font-weight:bold;">普通小型車(手、自排)</h5>
						<p>&emsp; &emsp; 學費&ensp;13,000元&emsp;+&emsp;代辦規費 3,500元</p>
				</div>
				<div class="section">
					<h4 class="title">(四) 課程與時段</h4>
					<h6 style="font-weight:bold;">汽車術科</h6>
				    <p>&emsp;&emsp;平日時段（星期一到星期五)，任一時段、每次50分鐘</p>
				    <p>&emsp;&emsp;假日時段 (請另洽櫃台)</p>
				    <table>
				    	<tr>
				    		<td>  節次</td>
				    		<td>&emsp;時間</td>
				    		<td>&emsp;節次</td>
				    		<td>&emsp;時間</td>
				    		<td>&emsp;節次</td>
				    		<td>&emsp;時間</td>
						</tr>
				    	<tr>
				    		<td>早</td>
				    		<td>&emsp;06:00~06:50</td>
				    		<td>&emsp;五</td>
				    		<td>&emsp;10:50~11:40</td>
				    		<td>&emsp;九</td>
				    		<td>&emsp;15:50~16:40</td>
						</tr>
						<tr>
				    		<td>一</td>
				    		<td>&emsp;06:50~07:40</td>
				    		<td>&emsp;午</td>
				    		<td>&emsp;12:00~12:50</td>
				    		<td>&emsp;十</td>
				    		<td>&emsp;17:00~17:50</td>
						</tr>
						<tr>
				    		<td>二</td>
				    		<td>&emsp;08:00~08:50</td>
				    		<td>&emsp;六</td>
				    		<td>&emsp;13:00~13:50</td>
				    		<td>&emsp;晚(一)</td>
				    		<td>&emsp;17:50~18:40</td>
						</tr>
						<tr>
				    		<td>三</td>
				    		<td>&emsp;09:00~09:50</td>
				    		<td>&emsp;七</td>
				    		<td>&emsp;14:00~14:50</td>
				    		<td>&emsp;晚(二)</td>
				    		<td>&emsp;18:40~19:30</td>
						</tr>
						<tr>
				    		<td>四</td>
				    		<td>&emsp;10:00~10:50</td>
				    		<td>&emsp;八</td>
				    		<td>&emsp;15:00~15:50</td>
				    		<td>&emsp;晚(三)</td>
				    		<td>&emsp;19:30~20:20</td>
						</tr>
					</table>
				</div>
				<div class="section">
					<h4 class="title">(五) 報名須知</h4>
				    <p>1. 學費不報括監理站之規費(報考費、學照費、駕照費、保險費等)。</p>
				    <p>2. 本學期課程自繳費起一年內有效，預期不得退費。</p>
				    <p>3. 監理站報考規費應遵照本班公布日期內，繳交服務台</p>
				    <p>4. 學費應在開課前繳清。(報名時請繳訂金500或1000元)</p>
				    <p>5. 術科計30節課(含道路駕駛)，每節課50分鐘，除星期例假外，每日原則一節課。</p>
				    <p>6. 術科上課應請準時，遲到者不得要求延長補課。</p>
				    <p>7. 考試日期確定後，如非特殊事故，不得無故缺考(應事無法參加應考時，請事前提出報備)。如本班已完成報名手續，報考費仍應繳交，不予退還。</p>
				    <p>8. 中途退學者，開課日算起已逾全期三分之一者，不予退費:扣除手續費，及學習鐘點費&emsp;每節課程:1,000元。</p>
				</div>
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

	.nav-pills .nav-link, .nav-pills .show>.nav-link {
		color: #fff;
		background-color: #0D7496;
		height:64px!important;
		line-height:48px!important;
	}
	
	.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
		color: #ffd965;
		background-color: #0D7496;
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
