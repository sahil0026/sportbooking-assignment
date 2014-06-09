'use strict';

angular.module('sportbookingAssignmentApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/description.html',
        controller: 'DescriptionCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
