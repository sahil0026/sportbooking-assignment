'use strict';

angular.module('sportbookingAssignmentApp')
	.service('data',function(){
	
		this.map_options = {
			center: new google.maps.LatLng(52.31, 13.24),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		this.marker_options = {
			anchorPoint : new google.maps.Point(0, -29)
		};

		this.autocomplete_options = {
			componentRestrictions: {country: 'de'}
		};

		this.getAddress = function(){
			var address = '';
			if (this.place && this.place.address_components) {
			  var place = this.place;
			  address = [
			    (place.address_components[0] && place.address_components[0].short_name || ''),
			    (place.address_components[1] && place.address_components[1].short_name || ''),
			    (place.address_components[2] && place.address_components[2].short_name || '')
			  ].join(' ');
			}
			return address;
		}

		this.setPlace = function(placeObj){
			this.place = placeObj;
		};

		this.setMarkerOptions = function(marker_options){
			this.marker_options = marker_options;
		};

  });