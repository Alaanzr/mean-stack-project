var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('mongoose').model('User');

module.exports = function() {
  passport.use(new LocalStrategy(function(username, password, complete) {
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return complete(err);
      }
      if (!user) {
        return complete(null, false, {
          message: 'Unknown user'
        });
      }
      if (!user.authenticate(password)) {
        return complete(null, false, {
          message: 'Invalid password'
        });
      }

      return complete(null, user);
    });
  }));
};
