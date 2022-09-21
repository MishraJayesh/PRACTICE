require('dotenv').config();
const express = require('express');
const app = express();
const DBCON = require('./db');
const VehiclesRoute = require('./routes/vehicles.route');
const PORT = 8000;
// Connecting To Database
DBCON();
// Allowing JSON Objects
app.use(express.json());
console.log(process.env);
app.use('/vehicles', VehiclesRoute);

app.listen(PORT, console.log('Server Running On Port', PORT));