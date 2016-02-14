var express = require('express');

module.exports = function() {

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(express.static('public'));

  require('../app/routes/index.server.routes.js')(app);

  return app;
};
