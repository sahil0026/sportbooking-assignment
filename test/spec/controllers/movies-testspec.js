'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('sportbookingAssignmentApp'));

  var mainCtrl,moviesCtrl,moviesScope,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope
    });


    moviesScope = scope.$new();
    moviesCtrl = $controller('MoviesCtrl', {
      $scope: moviesScope
    });

  }));

  it('moviesCtrl should be defined', function(){
    expect(moviesCtrl).toBeDefined();
  });

});
