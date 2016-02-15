meanApp.controller('UserCtrl', ['Users', function(Users) {

  var vm = this;

  vm.users = Users.query();

}]);
