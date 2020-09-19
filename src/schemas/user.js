const mongoose = require('mongoose');

const Investment = mongoose.Schema({
    type: String,
    price: Number
  }
)

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  name: String,
  lastName: String,
  birthDate: Date,
  email: String,
  celPhone: Number,
  secundaryPhone: Number,
  state: String,
  city: String,
  business: Boolean,
  address: String,
  investment: [Investment],
});

module.exports = UserSchema
