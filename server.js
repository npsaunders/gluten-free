const express = require('express');
const app = express();
require('dotenv').config();



//Listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on port...${PORT}`);
})