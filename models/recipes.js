const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MongoDB schema for a recipe
const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    urlPath: String,
    instructions: { type: String, required: true },
    googleID: String
  });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;