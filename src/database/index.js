//Initialization
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

//Schemas
const UserSchema = require('../schemas/user')
const CarSchema = require('../schemas/car')
const SearchSchema = require('../schemas/search')

// Models
const DB_USER = mongoose.model('User', UserSchema);
const DB_CAR = mongoose.model('Car', CarSchema);
const DB_SEARCH = mongoose.model('Search', SearchSchema);

module.exports = {
    DB_USER,
    DB_CAR,
    DB_SEARCH
}
