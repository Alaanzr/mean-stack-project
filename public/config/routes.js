angular.module('meanApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: '/views/users.client.view.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);
