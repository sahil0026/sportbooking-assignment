'use strict';

angular.module('sportbookingAssignmentApp')
	.controller('MapCtrl',['$scope','data',function($scope , data){

		$scope.tabClass = 'mapTab';

		var input = document.getElementById('pac-input');

		// Initialize the google map with init Map options
		$scope.map = new google.maps.Map(document.getElementById('map-canvas'),data.mapOptions);
		// Position search box inside Google Maps
		$scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
		
		// Function to load the last viewed map
		$scope.getMapData = function(){
			if(data.place){
				// If the place has a geometry, then present it on a map.
				if(data.place.geometry.viewport){
					$scope.map.fitBounds(data.place.geometry.viewport);
				}else{
					$scope.map.setCenter(data.place.geometry.location);
					$scope.map.setZoom(17);  // Why 17? Because it looks good.
				}
			}
		};

		// Function to show marker on the google map
		$scope.showMarker = function(){
			$scope.marker = new google.maps.Marker(data.markerOptions);
			if(data.place){
				$scope.marker.setPosition(data.place.geometry.location);
			}
			$scope.marker.setVisible(true);
			$scope.marker.setMap($scope.map);
		};

		$scope.getMapData();
		$scope.showMarker();

		// Initialize autocomplete feature with Country restrictions limited to Germany(Code: 'DE')
		$scope.autocomplete = new google.maps.places.Autocomplete(input,data.autocompleteOptions);
		$scope.autocomplete.bindTo('bounds', $scope.map);

		$scope.$watch('map',function(){
			$scope.autocomplete.bindTo('bounds', $scope.map);
		});

		// Initialize infowindow for selected location & will be shown just above marker
		var infowindow = new google.maps.InfoWindow();

       // Listen for the event fired when the user selects an item from the
       // pick list. Retrieve the matching places for that item.
		google.maps.event.addListener($scope.autocomplete, 'place_changed',function() {
			infowindow.close();
			$scope.marker.setVisible(false);
			var place = $scope.autocomplete.getPlace();
			if (!place.geometry) {
			  return;
			}else{
				data.setPlace(place);
			}

			$scope.getMapData();

			// Initialize marker
			data.setMarkerOptions({
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(35, 35)
			});

			$scope.showMarker();

			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + data.getAddress());
		  infowindow.open($scope.map, $scope.marker);
		});

  }]);
