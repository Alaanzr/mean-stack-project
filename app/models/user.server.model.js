var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    match: /.+@\..+/
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    validate: [
      function(password) {
        return password && password.length >= 6;
      },
      'Password should be 6 characters or more'
    ]
  }
});

mongoose.model('User', UserSchema);
