const express = require('express');
const myApp = express();
const connectToDB = require('./db');
const PORT = 6000;
const Usersrouter = require('./route/users.route');

//Database Connecting
connectToDB();

//Allowing JSON Objects
myApp.use(express.json());

myApp.use('/users',Usersrouter);

myApp.listen(PORT, console.log("Server Is Running On Port",PORT));