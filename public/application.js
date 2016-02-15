var meanApp = angular.module('meanApp', ['ngRoute', 'ngResource']);

meanApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
