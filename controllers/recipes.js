const express = require('express');
const recipeRoute = express.Router();
const Recipe = require('../models/recipes.js');


// ROUTES --------------------
// INDEX - Display all recipes; apply filter, do search, etc from this page
recipeRoute.get('/', (req, res) => {
  Recipe.find({}, (error, foundRecipes) => {
    res.render("recipes/index.ejs", {
      recipes: foundRecipes
    });
  });
});

// NEW - New Recipe Page
recipeRoute.get('/new', (req, res) => {
  res.render('recipes/new.ejs');
});

// DELETE - Delete a recipe you have submitted
recipeRoute.delete('/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id, () => {
    res.redirect('/recipes');
  });
});

// UPDATE - Update a recipe you have submitted and edited
recipeRoute.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  },
    (error, updatedRecipe) => {
      res.redirect(`/recipes/${req.params.id}`);
    });
});

// CREATE - Create a recipe you have submitted through the New page

recipeRoute.post('/', (req, res) => {
  Recipe.create(req.body, (error, createdRecipe) => {
    res.redirect('/recipes');
  });
});

// EDIT - Edit a recipe you have submitted
recipeRoute.get('/:id/edit', (req, res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('recipes/edit.ejs', {
      recipe: foundRecipe
    });
  });
});

// SHOW - Show a recipe
recipeRoute.get('/:id', (req, res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('recipes/show.ejs', {
      recipe: foundRecipe
    });
  });
});

module.exports = recipeRoute;