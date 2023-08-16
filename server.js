// express
const express = require('express');
// express variable
const app = express();
// mongoose
const mongoose = require('mongoose');
// required for .env
require('dotenv').config()

// import cats & dogs
const Cat = require('./utilities/cat')
const Dog = require('./utilities/dog')

const cats = require('./models/cats')
const dogs = require('./models/dogs')
const adoptAll = require('./models/adoption')

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

// experiment css
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

// ------------------------------------------- MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('mongo mongo mongo');
});


// main page
app.get("/", (req,res) => {
    res.render('Welcome', {adoptAll: adoptAll})
})

// cat & dog INDEX
app.get('/cats', async(req, res) => {
    const AllCats = await Cat.find({});
    res.render("CatIndex", {
        cats : AllCats
    })
});

app.get('/dogs', async(req,res) => {
    const AllDogs = await Dog.find({});
    res.render("DogIndex",{
        dogs : AllDogs
    })
})

// seed route
// app.get('/cats/seed', async(req,res) => {
//     await Cat.deleteMany({});
//     await Cat.create(catData);

//     res.redirect('/cats')
// })
// app.get('dogs/seed', async(req,res) => {
//     await Dog.deleteMany({});
//     await Dog.create(dogData);

//     res.redirect('/dogs')
// })
// cat & dog POST
app.post('/cats', async (req, res)=>{
    if(req.body.hadFirstCheckUp === 'on'){ //if checked, req.body.hadFirstCheckUp is set to 'on'
        req.body.hadFirstCheckUp = true; //do some data correction
    } else { //if not checked, req.body.hadFirstCheckUp is undefined
        req.body.hadFirstCheckUp = false; //do some data correction
    }

    const newCat = await Cat.create(req.body)
    res.send(newCat);

});

app.post('/dogs', async (req, res)=>{
    if(req.body.isGood === 'on'){ //if checked, req.body.isGoodBoy is set to 'on'
        req.body.isGood = true; //do some data correction
    } else { //if not checked, req.body.isGoodBoy is undefined
        req.body.isGood = false; //do some data correction
    }

    const newDog = await Dog.create(req.body)
    res.send(newDog);
    
});

// **************************************************** NEW ROUTE
app.get('/cats/new', (req, res) => {
    res.render('CatNew');
});

app.get('/dogs/new', (req, res) => {
    res.render('DogNew');
});

// ***************************************************** DELETE
app.delete('/cats/:id', async(req,res) => {
    // res.send("...deleting")
    await Cat.findByIdAndRemove(req.params.id)
    res.redirect('/cats')
})

app.delete('/dogs/:id', async(req,res) => {
    // res.send("...deleting")
    await Dog.findByIdAndRemove(req.params.id)
    res.redirect('/dogs')
})

// ***************************************************** PUT
app.put('/cats/:id', async(req, res)=>{
    if(req.body.hadFirstCheckUp === 'on'){
        req.body.hadFirstCheckUp = true;
    } else {
        req.body.hadFirstCheckUp = false;
    }
    const updatedCat = await Cat.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/cats/${req.params.id}`);
    });

app.put('/dogs/:id', async(req, res)=>{
    if(req.body.isGood === 'on'){
        req.body.isGood = true;
    } else {
        req.body.isGood = false;
    }
    await Dog.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/dogs/${req.params.id}`);
    });

// **************************************************** EDIT
app.get('/cats/:id/edit', async(req, res)=>{
    const foundCat = await Cat.findById(req.params.id)
    res.render('CatEdit', {
        cat: foundCat
    })
});

app.get('/dogs/:id/edit', async(req, res)=>{
    const foundDog = await Dog.findById(req.params.id)
    res.render('DogEdit', {
        dog: foundDog
    })
});




// ***************************************************** SHOW
app.get('/cats/:id', async(req, res) => {
    const eachCat = await Cat.findById(req.params.id)
    await res.render("CatShow",
    {cat: eachCat}
    )
});

app.get('/dogs/:id', async(req, res) => {
    const eachDog = await Dog.findById(req.params.id)
    await res.render("DogShow",
    {dog: eachDog}
    )
});






// ************************************************* SERVER
app.listen('3000', (req,res) => {
    console.log("I've been to the year 3000")
})