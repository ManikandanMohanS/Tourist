const mongoose = require('mongoose');
const models = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    total: Number,
    date: String,
   destination: String,});

module.exports = mongoose.model('Booking', models);