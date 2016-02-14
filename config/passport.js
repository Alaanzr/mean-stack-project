var passport = require('passport'), mongoose = require('mongoose');

module.exports = function() {
  var User = mongoose.model('User');

  passport.serializeUser(function(user, complete) {
    complete(null, user.id);
  });

  passport.deserializeUser(function(id, complete) {
    User.findOne({
      _id: id
    }, '-password -salt', function(err, user) {
      complete(err, user);
    });
  });

  require('./strategies/local.js')();
};
