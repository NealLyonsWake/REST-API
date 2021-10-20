const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();
const routes = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/employeedb');

app.use(express.json());
app.use('/api',routes);

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})