'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('sportbookingAssignmentApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('MainCtrl should be defined', function(){
    expect(MainCtrl).toBeDefined();
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.activeTab).toBe(0);
  });

  it('No Route should match to Description Controller', function() {
    inject(function($route) {
      expect($route.routes['/'].controller).toBe('DescriptionCtrl');
    });
  });

  it('No Route should load Description View', function() {
    inject(function($route) {
      expect($route.routes['/'].templateUrl).toEqual('views/description.html');
    });
  });

  it('Map Route should match to Map Controller', function() {
    inject(function($route) {
      expect($route.routes['/map'].controller).toBe('MapCtrl');
    });
  });

  it('Map Route should load Map View', function() {
    inject(function($route) {
      expect($route.routes['/map'].templateUrl).toEqual('views/map.html');
    });
  });

  it('Movies Route should match to Movies View', function() {
    inject(function($route) {
      expect($route.routes['/movies'].controller).toBe('MoviesCtrl');
    });
  });

  it('Movies Route should load Movies View', function() {
    inject(function($route) {
      expect($route.routes['/movies'].templateUrl).toEqual('views/movies.html');
    });
  });

  it('Null Route should redirect to home page', function() {
    inject(function($route) {
      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
  
});
