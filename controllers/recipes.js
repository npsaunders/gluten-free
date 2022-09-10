const express = require('express');
const recipeRoute = express.Router();




// ROUTES --------------------
// INDEX - Display all recipes; apply filter, do search, etc from this page
recipeRoute.get('/', (req, res) => {
  res.send("recipe index route")
  // res.render('recipes/index.ejs');
});

// NEW - New Recipe Page
recipeRoute.get('/glutenFreeRecipes/new', (req, res) => {
  res.send('new route');
});

// DELETE - Delete a recipe you have submitted
recipeRoute.delete('/glutenFreeRecipes/:id', (req, res) => {
  res.send('delete route');
});

// UPDATE - Update a recipe you have submitted and edited
recipeRoute.put('/glutenFreeRecipes/:id', (req, res) => {
  res.send('update route');
});

// CREATE - Create a recipe you have submitted through the New page

recipeRoute.post('/glutenFreeRecipes', (req, res) => {
  res.send('create route');
});

// EDIT - Edit a recipe you have submitted
recipeRoute.get('/glutenFreeRecipes/:id/edit', (req, res) => {
  res.send('edit route');
});

// SHOW - Show a recipe
recipeRoute.get('/glutenFreeRecipes/:id', (req, res) => {
  res.send('show route');
});

module.exports = recipeRoute;