const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    title: String,
    active: Boolean,
    duration: Number,
    place: [String],
    pictures: [String],
    descriptions: [String],
    price: [Number],
    dates: [{
        meetUp: Date,
        reservations: [{
            userId: String,
            nbAdults: Number,
            nbChildren: Number
        }]
    }]
})

const Show = mongoose.model("show", showSchema);
module.exports = Show;