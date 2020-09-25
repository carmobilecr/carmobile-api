const mongoose = require('mongoose');

const Brand = mongoose.Schema({
    brandName: String,
    modelName: String,
    editionName: String
})

const Feature = mongoose.Schema({
        featureName: String
    }
)

const SearchSchema = mongoose.Schema(
    {
        brand: Brand,
        style: String,
        year: String,
        cylinder: String,
        carTransmission: String,
        mileageBottom: Number,
        mileageTop: Number,
        financing: Boolean,
        state: String,
        city: String,
        priceBottom: Number,
        priceTop: Number,
        carFeatures: Feature
    }
)

module.exports = SearchSchema
