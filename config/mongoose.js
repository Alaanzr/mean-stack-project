var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect('mongodb://localhost/mean-stack');

  require('../app/models/user.server.model.js');

  return db;
};
