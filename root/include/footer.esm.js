export function FooterContent(){
	return`
		<!--footer-->
		<footer class="container-fluid">
			<hr>
			<div class="row content-box">
						<div class="col-md-4 col-12 offset-md-2 mt-4">
							<h4 class="pt-5" style="color:#0D7496;font-weight:bold">太子汽車駕訓班</h4>
							<p class="pt-5">電話：( 03 ) 436 - 1488</a></p>
							<p>傳真：( 03 ) 437 - 3036</p>
							<p>地址：320桃園市中壢區後寮二路339號</p>
						</div>
						<div class="col-md-4 col-12">
								<div id="map" ></div>
								<script>
									var map;
									var markers = []
									var position = [
										{label:{text:' ',color:'#0D7496',fontWeight:'bold',fontsize:"24px",},lat:24.938543,lng:121.245535, }
										];
									function initMap() {
										map = new google.maps.Map(document.getElementById('map'), {
											zoom: 14,
											center: {
												lat: 24.938543,
												lng: 121.245535
											},
											// styles: [
											// 		{
											// 			"featureType": "all",
											// 			"elementType": "labels.text.fill",
											// 			"stylers": [
											// 				{
											// 					"color": "#ffffff"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "all",
											// 			"elementType": "labels.text.stroke",
											// 			"stylers": [
											// 				{
											// 					"color": "#000000"
											// 				},
											// 				{
											// 					"lightness": 13
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "administrative",
											// 			"elementType": "geometry.fill",
											// 			"stylers": [
											// 				{
											// 					"color": "#000000"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "administrative",
											// 			"elementType": "geometry.stroke",
											// 			"stylers": [
											// 				{
											// 					"color": "#144b53"
											// 				},
											// 				{
											// 					"lightness": 14
											// 				},
											// 				{
											// 					"weight": 1.4
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "landscape",
											// 			"elementType": "all",
											// 			"stylers": [
											// 				{
											// 					"color": "#08304b"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "poi",
											// 			"elementType": "geometry",
											// 			"stylers": [
											// 				{
											// 					"color": "#0c4152"
											// 				},
											// 				{
											// 					"lightness": 5
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "road.highway",
											// 			"elementType": "geometry.fill",
											// 			"stylers": [
											// 				{
											// 					"color": "#000000"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "road.highway",
											// 			"elementType": "geometry.stroke",
											// 			"stylers": [
											// 				{
											// 					"color": "#0b434f"
											// 				},
											// 				{
											// 					"lightness": 25
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "road.arterial",
											// 			"elementType": "geometry.fill",
											// 			"stylers": [
											// 				{
											// 					"color": "#000000"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "road.arterial",
											// 			"elementType": "geometry.stroke",
											// 			"stylers": [
											// 				{
											// 					"color": "#0b3d51"
											// 				},
											// 				{
											// 					"lightness": 16
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "road.local",
											// 			"elementType": "geometry",
											// 			"stylers": [
											// 				{
											// 					"color": "#000000"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "transit",
											// 			"elementType": "all",
											// 			"stylers": [
											// 				{
											// 					"color": "#146474"
											// 				}
											// 			]
											// 		},
											// 		{
											// 			"featureType": "water",
											// 			"elementType": "all",
											// 			"stylers": [
											// 				{
											// 					"color": "#021019"
											// 				}
											// 			]
											// 		}
											// ],
										});
										for (var i=0;i<position.length; i++){
											addMarker(i);
										}
									}
									function addMarker(e){
										markers[e] = new google.maps.Marker({
											position:{
												lat: position[e].lat,
												lng: position[e].lng
											},
											map:map,
											label: position[e].label,
											animation: google.maps.Animation.BOUNCE,
										})
									}
								</script>
								<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8wCOl04fZ2UL1gx-bek0y02Fc4vefuHs&callback=initMap"
										async defer></script>
						</div>
			</div>
			<div class="row" id="footer">
				<div>
					<ul>
						<li class="twitter">
							<a href="">twitter</a>
						</li>
						<li class="facebook">
							<a href="">facebook</a>
						</li>
						<li class="googleplus">
							<a href="">googleplus</a>
						</li>
					</ul>
					<p>&copy; Copyright 2020 All rights reserved by 太子駕訓班 Design by AugustusYu</p>
				</div>
			</div>
		</footer>
		
	`;
}
