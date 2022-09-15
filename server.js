// DEPENDENCIES --------------
const express = require('express');
const app = express();
//for use with Oauth
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Database Configuration ------------------
mongoose.connect(process.env.DATABASE_URL);

// Database Connection Error / Success ---------------------
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//for use with Oauth
require('./config/passport.js');

const recipesController = require('./routes/recipes.js');
const indexRoutes = require('./routes/index.js');

// MIDDLEWARE ----------------
// Parse incoming request and return an object. Limits were included due to crashing of 
// rich text formatter if a large image was included and then tried to save
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));
//set the path to the public folder as static
app.use(express.static('public'));
//Override method for use when deleting or editing a recipe
app.use(methodOverride('_method'));

app.use(express.json());

//For use with Oauth
app.use(session({
  secret: 'GLUT3NFR33!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRoutes);
app.use('/', recipesController);

// view engine setup
app.set('view engine', 'ejs');
// // ROUTES --------------------
// // // INDEX to main landing page 
// app.get('/', (req, res) => {
//   res.render('index.ejs')
// });

//Listener -------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port...${PORT}`);
})