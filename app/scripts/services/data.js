'use strict';

angular.module('sportbookingAssignmentApp')
	.service('data',function(){

		this.autocompleteOptions = {
			componentRestrictions: {country: 'de'}
		};

		this.mapOptions = {
			center: new google.maps.LatLng(-33.8688, 151.2195),
			zoom: 13,
		};
  });