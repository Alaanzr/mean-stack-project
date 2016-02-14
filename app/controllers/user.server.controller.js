var User = require('mongoose').model('User');

exports.list = function(req, res) {
  var users = User.find({}, function(err, users) {
    return err ? console.log(err) : res.json(users);
  });
};

exports.create = function(req, res) {
  var user = new User(req.body);
  
  user.save(function(err) {
    return err ? console.log(err) : res.json(user);
  });
};
