// express
const express = require('express');
// express variable
const app = express();
// mongoose
const mongoose = require('mongoose');
// required for .env
require('dotenv').config()

// import cats & dogs
const Cat = require('./models/cat')
const Dog = require('./models/dog')

// *********************************** MIDDLEWARE
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").
createEngine());
// delete
const methodOverride = require('method-override');

app.use(express.json()) //thunderware to get json

// ----------- tells express to use middleware
app.use(express.urlencoded({extended:false}));
// ---------------- middleware?
app.use((req, res, next) => {
    console.log('Not broken yet ...');
    next();
});

// delete
app.use(methodOverride('_method'));

// ------------------------------------------- MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('mongo mongo mongo');
});









// ************************************************* SERVER
app.listen('3000', (req,res) => {
    console.log("I've been to the year 3000")
})