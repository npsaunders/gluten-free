// DEPENDENCIES --------------
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const recipesController = require('./controllers/recipes.js');

// Database Configuration ------------------
mongoose.connect(process.env.DATABASE_URL);

// Database Connection Error / Success ---------------------
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// MIDDLEWARE ----------------
// Parse incoming request and return an object. Limits were included due to crashing of 
// rich text formatter if a large image was included and then tried to save
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
//set the path to the public folder as static
app.use(express.static('public'));
//Override method for use when deleting or editing a recipe
app.use(methodOverride('_method'));
//use the recipe controller
app.use('/recipes', recipesController);


// ROUTES --------------------
// INDEX to main landing page 
app.get('/', (req, res) => {
  res.render('index.ejs');
});


//Listener -------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port...${PORT}`);
})