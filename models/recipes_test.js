const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    "recipe": {
      "label": "string",
      "image": "string",
    },
    "ingredientLines": [
      "string"
    ],
    "ingredients": [
      {
        "text": "string",
        "quantity": 0,
        "measure": "string",
        "food": "string",
        "weight": 0,
      }
    ],
    "mealType": [
      "string"
    ],
    "instructions": [
      "string"
    ],
    "tags": [
      "string"
    ],
  });



const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;