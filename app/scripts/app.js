'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngResource','ngRoute'
  ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/About', {
    templateUrl: '../views/About.html',
    controller: 'AboutCtrl'
      })
      .when('/',{
          templateUrl: '../views/main.html',
          controller: 'MainCtrl'
      });
}]);

