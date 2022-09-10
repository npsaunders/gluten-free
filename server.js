// DEPENDENCIES --------------
const express = require('express');
const app = express();
require('dotenv').config();

// DATABASE ------------------

// MIDDLEWARE ----------------

// ROUTES --------------------
// INDEX
app.get('/', (req, res) => {
  res.redirect('/glutenFreeRecipes');
});

app.get('/glutenFreeRecipes', (req, res) => {
  res.send('index route');
});

// NEW
app.get('/glutenFreeRecipes/new', (req, res) => {
  res.send('new route');
});

// DELETE
app.delete('/glutenFreeRecipes/:id', (req, res) => {
  res.send('delete route');
});

// UPDATE
app.put('/glutenFreeRecipes/:id', (req, res) => {
  res.send('update route');
});

// CREATE
app.post('/glutenFreeRecipes', (req, res) => {
  res.send('create route');
});

// EDIT
app.get('/glutenFreeRecipes/:id/edit', (req, res) => {
  res.send('edit route');
});

// SHOW
app.get('/glutenFreeRecipes/:id', (req, res) => {
  res.send('show route');
});


//Listener -------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port...${PORT}`);
})