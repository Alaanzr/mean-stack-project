var meanApp = angular.module('meanApp', ['ngRoute']);

meanApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
