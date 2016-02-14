var express = require('./config/express.js'), mongoose = require('./config/mongoose.js');

var app = express();
var db = mongoose();

app.listen(3000);

console.log('Server running on port 3000');
