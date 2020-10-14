const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    timeOfBirth: {
        type: String,
        trim: true,
        required: false
    },
    placeOfBirth: {
        type: String,
        trim: true,
        required: true
    },
    service: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);