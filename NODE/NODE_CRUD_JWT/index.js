const express = require('express');
const app = express();
const DBCONFIG = require('./db');
const GamesRoute = require('./routes/games.routes');
const PORT = 8000;

// connect to mongo db database
DBCONFIG();

app.use(express.json());

app.use('/game', GamesRoute);

app.listen(PORT, console.log("Server Running On Port", PORT));