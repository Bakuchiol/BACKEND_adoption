const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    age: { type: Number, required: true },
    description: { type: String, required: true },
    breed:  { type: String, required: true },
    isGood: Boolean
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;