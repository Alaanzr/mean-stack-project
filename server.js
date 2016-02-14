var express = require('./config/express.js'), mongoose = require('./config/mongoose.js');

var db = mongoose();
var app = express();


app.listen(3000);

console.log('Server running on port 3000');
