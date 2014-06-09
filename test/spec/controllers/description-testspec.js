'use strict';

describe('Controller: DescriptionCtrl', function () {

  // load the controller's module
  beforeEach(module('sportbookingAssignmentApp'));

  var mainCtrl,descriptionCtrl,descriptionScope,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    descriptionScope = scope.$new();
    descriptionCtrl = $controller('DescriptionCtrl', {
      $scope: descriptionScope
    });

  }));

  it('DescriptionCtrl should be defined', function(){
    expect(descriptionCtrl).toBeDefined();
  });

  it('App container class should be descriptionTab',function(){
    expect(descriptionScope.tabClass).toBe('descriptionTab');
  });

});
