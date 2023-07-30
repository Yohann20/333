const express = require('express');
const {v4:uuidv4} = require ('uuid'); //4.1k (gzipped: 1.8k)

const { configEnv } = require('./configEnv.js');
require('./configDB.js');
const mongoose = require('mongoose');
const { DB_URL } = configEnv();
const { PORT } = configEnv();

const indexRoutes = require('./routes/index.routes.js');

const app = express();
app.use(express.json());



 
app.use('/api', indexRoutes);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});