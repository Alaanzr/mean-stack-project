var express = require('express'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  config = require('./config'),
  session = require('express-session'),
  flash = require('connect-flash');

module.exports = function() {

  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(bodyParser.urlencoded(({
    extended: true
  })));
  app.use(bodyParser.json());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/user.server.routes.js')(app);

  app.use(express.static('public'));

  return app;
};
