const Recipe = require('../models/recipes.js');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res) {
  Recipe.find({}, function (err, recipes) {
    res.render('recipes/index', {
      recipes,
      user: req.user
    });
  });
}

function addFact(req, res) {

}

function delFact(req, res) {

}