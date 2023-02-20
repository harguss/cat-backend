'use strict';
console.log('server up?');
//require
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//use
const app = express();
app use = (cors());
//let user know if you are hitting a route
app.get('*', (req, res) => {
  response.status(400).send(error.message);
});

//error
//eslint disable next line no unused var
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});
//listen  (port, callback)
app.listen(PORT,() => console.log('listening on port, ${PORT}'));

const PORT = process.env.PORT || 5005
