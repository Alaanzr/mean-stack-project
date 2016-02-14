var express = require('express'), bodyParser = require('body-parser');

module.exports = function() {

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  
  app.use(bodyParser.json());

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/user.server.routes.js')(app);

  app.use(express.static('public'));

  return app;
};
