




// ROUTES --------------------
// INDEX - Display all reviews; apply filter, do search, etc from this page
// app.get('/', (req, res) => {
//   res.redirect('/glutenFreeRecipes');
// });

// NEW - New review page
app.get('/glutenFreeRecipes/new', (req, res) => {
  res.send('new route');
});

// DELETE - Delete a review you have submitted
app.delete('/glutenFreeRecipes/:id', (req, res) => {
  res.send('delete route');
});

// UPDATE - Update a review you have edited on the Edit page
app.put('/glutenFreeRecipes/:id', (req, res) => {
  res.send('update route');
});

// CREATE - Create a review you have submitted through the New page
app.post('/glutenFreeRecipes', (req, res) => {
  res.send('create route');
});

// EDIT - Edit a review you have submitted
app.get('/glutenFreeRecipes/:id/edit', (req, res) => {
  res.send('edit route');
});

// SHOW - Show a review
app.get('/glutenFreeRecipes/:id', (req, res) => {
  res.send('show route');
});