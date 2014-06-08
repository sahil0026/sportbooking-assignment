'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('sportbookingAssignmentApp'));

  var mainCtrl,descriptionCtrl,descriptionScope,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope
    });


    descriptionScope = scope.$new();
    descriptionCtrl = $controller('MoviesCtrl', {
      $scope: descriptionScope
    });

  }));

  it('DescriptionCtrl should be defined', function(){
    expect(descriptionCtrl).toBeDefined();
  });

});
