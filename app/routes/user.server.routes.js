var users = require('../controllers/user.server.controller.js'),
  passport = require('passport');

module.exports = function(app) {
  app.route('/users').get(users.list).post(users.create);

  app.route('/signup').get(users.renderSignup).post(users.signup);

  app.route('/signin').get(users.renderSignin).post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  }));

  app.get('/signout', users.signout);
};
