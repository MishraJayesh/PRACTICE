const express = require('express');
const GameController = require('../controllers/games.controllers')
const router = express.Router();

router.post('/create', GameController.createGame);

module.exports = router;