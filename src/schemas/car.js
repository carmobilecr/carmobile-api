const mongoose = require('mongoose');

const Brand = mongoose.Schema({
    brandName: String,
    modelName: String,
    editionName: String
})

const Photos = mongoose.Schema({
    front: String,
    leftSide: String,
    rightSide: String,
    rear: String,
    dash: String,
    engine: String,
    openDoor: String,
    gate: String,
    tire: String,
    passengerSeat: String,
    backSeat: String,
    gearLever: String,
    pedal: String,
    radio: String,
    tachometer: String,
    gloveBox: String,
    sunroof: String
})

const Feature = mongoose.Schema({
    centralLock: Boolean,
    electricGlass: Boolean,
    electricMirror: Boolean,
    alarm: Boolean,
    airBag: Boolean,
    absBreaks: Boolean,
    airConditioning: Boolean,
    hydraulicSteering: Boolean,
    adjustableSteering: Boolean,
    radioControlOnSteering: Boolean,
    cruiserControl: Boolean,
    dualGearbox: Boolean,
    bluetooth: Boolean,
    usbRadio: Boolean,
    cdPlayer: Boolean,
    touchScreenRadio: Boolean,
    frontCamera: Boolean,
    reverseCamera: Boolean,
    reverseSensors: Boolean,
    halogenLamp: Boolean,
    tintedWindows: Boolean,
    luxuryRings: Boolean,
    turbo: Boolean,
    leatherUpholstery: Boolean,
    electronicStabilityControl: Boolean,
    descentControl: Boolean,
    tirePressureMonitor: Boolean
})

const CarSchema = mongoose.Schema({
    brand: Brand,
    style: String,
    gas: String,
    year: Number,
    cylinder: Number,
    transmission: String,
    mileage: Number,
    doors: Number,
    price: Number,
    isNegotiable: Boolean,
    description: String,
    licensePlate: String,
    status: String,
    systemUser: String,
    views: Number,
    financing: Boolean,
    tons: Number,
    bodyStatus: Number,
    mechanicStatus: Number,
    state: String,
    city: String,
    photos: Photos,
    feature: Feature,
    createDate: Date,
    modifyDate: Date,
    deactivateDate: Date
});

module.exports = CarSchema;
