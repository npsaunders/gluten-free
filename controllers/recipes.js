const express = require('express');
const recipeRoute = express.Router();
const Recipe = require('../models/recipes.js');


// ROUTES --------------------
// INDEX - Display all recipes; apply filter, do search, etc from this page
recipeRoute.get('/', (req, res) => {
  res.render("recipes/index.ejs")
  // res.render('recipes/index.ejs');
});

// NEW - New Recipe Page
recipeRoute.get('/new', (req, res) => {
  res.render('recipes/new.ejs');
});

// DELETE - Delete a recipe you have submitted
recipeRoute.delete('/:id', (req, res) => {
  res.send('delete route');
});

// UPDATE - Update a recipe you have submitted and edited
recipeRoute.put('/:id', (req, res) => {
  res.send('update route');
});

// CREATE - Create a recipe you have submitted through the New page

recipeRoute.post('/', (req, res) => {
  Recipe.create(req.body, (error, createdRecipe) => {
    res.redirect('/recipes');
  });
});

// EDIT - Edit a recipe you have submitted
recipeRoute.get('/:id/edit', (req, res) => {
  res.send('edit route');
});

// SHOW - Show a recipe
recipeRoute.get('/recipes/:id', (req, res) => {
  res.send('show route');
});

module.exports = recipeRoute;