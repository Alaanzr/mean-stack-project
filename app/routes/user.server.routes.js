var users = require('../controllers/user.server.controller.js');

module.exports = function(app) {
  app.get('/users', users.list);
};
