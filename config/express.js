var express = require('express');

module.exports = function() {

  var app = express();

  app.use(express.static('public'));

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  require('../app/routes/index.server.routes.js')(app);

  return app;
};
