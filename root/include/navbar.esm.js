


export function NavContent(){
return `
		<header class="fixed-top">
			<div class="head-panel">
				<div class="container">
					<div class="row justify-content-lg-center justify-content-between">
						<div class="nav-logo">
							<a href="/index" class="logo"><img src="./res/img/logo01.png" alt="太子駕訓LOGO">太子駕訓班</a>
						</div>
						<div class="align-self-center">
							<button class="navbar-toggler-custom navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon">
									<svg width="2rem" height="2rem" viewBox="0 0 16 16" class="bi bi-list" fill="#0D7496" xmlns="http://www.w3.org/2000/svg">
									   <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="navbar">
				<div class="container">
					<div class=" nav collapse navbar-collapse " id="navbarNav">
						<ul class="align-self-center custom-navbar-nav" >
							<li class="nav-item">
								<a href="/index" role="tab">首頁</a>
							</li>
							<li class="nav-item">
								<a href="/about" role="tab">關於太子駕訓班</a>
							</li>
<!--							<li class="nav-item">-->
<!--								<a href="/course_info" role="tab">開班內容</a>-->
<!--							</li>-->
<!--							<li class="nav-item" data-toggle="dropdown" id="DropMenuCourses" >-->
<!--								<a href="#"  class="dropdown-toggle" data-toggle="dropdown">開班內容</a>-->
<!--								<ul class="dropdown-menu" aria-labelledby="DropMenuCourses">-->
<!--									<li class="tabs"><a href="/courses_info">課程類型-一</a></li>-->
<!--									<li class="tabs"><a href="">課程類型-二</a></li>-->
<!--								</ul>-->
<!--							</li>-->
							<li class="nav-item" >
								<a href="#" class="collapse-toggle" data-toggle="collapse" role="button" aria-expanded="false" data-target="#DropMenuCourses" aria-controls="DropMenuCourses">開班內容</a>
								<ul class="collapse course-dropdown-menu " id="DropMenuCourses">
									<li class="tabs"><a href="/course_info">普通小型車</a></li>
									<li class="tabs"><a href="/course_info_moto">普通、大型 重型機車</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a href="/environment" role="tab">環境設施</a>
							</li>
							<li class="nav-item">
								<a href="/teachers" role="tab">教練介紹</a>
		<!--						<a href="knowledge.html" role="tab">教練介紹</a>-->
		<!--						<a href="knowledge.html" role="tab">行車知識與模擬考試</a>-->
							</li>
							<li class="nav-item">
								<a href="/pictures" role="tab">照片花絮</a>
							</li>
							<li class="nav-item">
								<a href="/contect" role="tab">聯絡我們</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			



			
			
<!--<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#138a9f">-->
<!--    <div class="container">-->
<!--        <a class="custom-navbar-brand navbar-brand" href="#"><img src="#" alt="太子駕訓班LOGO"><h1 style="font-size: 17px;line-height: 38px;display: inline-block;margin-bottom: 0;">太子駕訓班</h1></a>-->
<!--        <button class="navbar-toggler-custom navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->
<!--        <div class="navbar-collapse justify-content-end collapse show" id="navbarNav" style="">-->
<!--            <ul class="custom-navbar-nav navbar-nav text-center">-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="/index">首頁</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="/about">關於太子駕訓班</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="https://car.taipei-drive.com.tw/page/coach">開班內容</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="https://car.taipei-drive.com.tw/news">環境設施</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="https://car.taipei-drive.com.tw/signup">教練介紹</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="https://car.taipei-drive.com.tw/page/transfer">照片花絮</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="https://car.taipei-drive.com.tw/signup/search">聯絡我們</a>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--    </div>-->
<!--</nav>-->
		
		
		
	
		
		</header>
`;
}
