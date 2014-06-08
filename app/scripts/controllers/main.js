'use strict';

angular.module('sportbookingAssignmentApp')
  .controller('MainCtrl', function ($scope) {
		  // Initialize the active tab to Description
		  $scope.activeTab = 0;

		  // Setter for current active tab on home screen
		  $scope.setActiveTab = function(tabIndex){
		    $scope.activeTab = tabIndex;
		  };

		  // Getter for current active tab on home screen
		  $scope.getActiveTab = function(){
			  if ($scope.activeTab === 0){
				  return 0;
			  }else if($scope.activeTab === 1){
				  return 1;
			  }else{
				  return 2;
			  }
		  };

    });
