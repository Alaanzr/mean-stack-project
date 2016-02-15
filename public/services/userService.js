meanApp.factory('Users', ['$resource', function($resource) {
  return $resource('/users', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
}]);
