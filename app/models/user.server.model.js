var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+@\..+/,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
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
