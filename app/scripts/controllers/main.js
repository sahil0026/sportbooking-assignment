'use strict';

angular.module('sportbookingAssignmentApp')
  .controller('MainCtrl', function ($scope) {
    	$scope.activeTab = 0;

    	$scope.setActiveTab = function(tabIndex){
    		$scope.activeTab = tabIndex;
    	};

		$scope.getActiveTab = function(){
			if ($scope.activeTab == 0){
				return 0;
			}else if($scope.activeTab == 1){
				return 1;
			}else{
				return 2;
			}
		};

  });
