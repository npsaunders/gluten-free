// DEPENDENCIES --------------
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const recipesController = require('./controllers/recipes.js');
const methodOverride = require('method-override');

// // Database Configuration ------------------
// mongoose.connect(process.env.DATABASE_URL);

// // Database Connection Error / Success ---------------------
// const db = mongoose.connection;
// db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
// db.on('connected', () => console.log('mongo connected'));
// db.on('disconnected', () => console.log('mongo disconnected'));



// MIDDLEWARE ----------------
app.use(express.urlencoded({ extended: true }));
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