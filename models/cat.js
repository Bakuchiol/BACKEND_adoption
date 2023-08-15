const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    age:  { type: String, required: true },
    description: { type: String, required: true },
    hadFirstCheckUp: Boolean,
    forAdoption: Boolean
});

const Cat = mongoose.model('Cat', dogSchema);

module.exports = Cat;