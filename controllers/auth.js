



// ROUTES --------------------
// NEW - Register for new login page
app.get('/glutenFreeRecipes/new', (req, res) => {
  res.send('new route');
});

// DELETE - Delete your account
app.delete('/glutenFreeRecipes/:id', (req, res) => {
  res.send('delete route');
});

// UPDATE - Update your profile
app.put('/glutenFreeRecipes/:id', (req, res) => {
  res.send('update route');
});

// CREATE - Create the new login when submitting from views->auth->New.ejs
app.post('/glutenFreeRecipes', (req, res) => {
  res.send('create route');
});

// EDIT - Edit your login profile 
app.get('/glutenFreeRecipes/:id/edit', (req, res) => {
  res.send('edit route');
});

// SHOW - user login page
app.get('/glutenFreeRecipes/:id', (req, res) => {
  res.send('show route');
});