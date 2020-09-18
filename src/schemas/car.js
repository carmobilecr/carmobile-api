const mongoose = require('mongoose');

const Photos = mongoose.Schema({
    front: String,
    leftSide: String,
    rightSide: String
})

const Brand = mongoose.Schema({
    brandName: String,
    modelName: String,
    editionName: String
})


const CarSchema = mongoose.Schema({
    brand: Brand,
    style: String,
    gas: String,
    photos: Photos
});

module.exports = CarSchema;
