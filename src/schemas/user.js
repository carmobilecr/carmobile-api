const mongoose = require('mongoose');

const Investment = mongoose.Schema(
  {
    type: String,
    price: Number
  }
)

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  investment: [Investment],
});

module.exports = UserSchema
