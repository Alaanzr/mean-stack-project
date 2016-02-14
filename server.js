process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express.js'),
  mongoose = require('./config/mongoose.js'),
  passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

console.log('Server running on port 3000');
