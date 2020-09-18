//Initialization
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

//Schemas
const UserSchema = require('../schemas/user')

// Models
const DB_USER = mongoose.model('User', UserSchema);

module.exports = {
    DB_USER
}
