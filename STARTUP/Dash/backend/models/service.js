const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
