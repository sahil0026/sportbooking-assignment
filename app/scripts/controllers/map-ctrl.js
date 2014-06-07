'use strict';

angular.module('sportbookingAssignmentApp')
	.controller('MapCtrl',['$scope','data',function($scope , data){

		var map = new google.maps.Map(document.getElementById('map-canvas'),data.mapOptions);

		var input = document.getElementById('pac-input');

		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		var autocomplete = new google.maps.places.Autocomplete(input,data.autocompleteOptions);
		autocomplete.bindTo('bounds', map);

		var infowindow = new google.maps.InfoWindow();
		var marker = new google.maps.Marker({
			map: map,
			anchorPoint: new google.maps.Point(0, -29)
		});
     
       // [START region_getplaces]
       // Listen for the event fired when the user selects an item from the
       // pick list. Retrieve the matching places for that item.
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			infowindow.close();
			marker.setVisible(false);
			var place = autocomplete.getPlace();
			if (!place.geometry) {
			  return;
			}

			// If the place has a geometry, then present it on a map.
			if (place.geometry.viewport) {
			  map.fitBounds(place.geometry.viewport);
			} else {
			  map.setCenter(place.geometry.location);
			  map.setZoom(17);  // Why 17? Because it looks good.
			}
			marker.setIcon(/** @type {google.maps.Icon} */({
			  url: place.icon,
			  size: new google.maps.Size(71, 71),
			  origin: new google.maps.Point(0, 0),
			  anchor: new google.maps.Point(17, 34),
			  scaledSize: new google.maps.Size(35, 35)
			}));
			marker.setPosition(place.geometry.location);
			marker.setVisible(true);

			var address = '';
			if (place.address_components) {
			  address = [
			    (place.address_components[0] && place.address_components[0].short_name || ''),
			    (place.address_components[1] && place.address_components[1].short_name || ''),
			    (place.address_components[2] && place.address_components[2].short_name || '')
			  ].join(' ');
			}

			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
			infowindow.open(map, marker);
		});
       // [END region_getplaces]

  }]);
