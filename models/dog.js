const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    age: { type: String, required: true },
    description: { type: String, required: true },
    breed:  { type: String, required: true },
    forAdoption: Boolean
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;