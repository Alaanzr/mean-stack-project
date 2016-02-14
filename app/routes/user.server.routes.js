var users = require('../controllers/user.server.controller.js');

module.exports = function(app) {
  app.route('/users').get(users.list).post(users.create);
};
