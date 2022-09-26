const express = require('express');
const { usersGet, usersPost, usersPut, usersDelete } = require('../controller/users.controller');
const Usersrouter = express.Router();
// const { register, login } = require('../middelwares/users.auth');

// Usersrouter.route('/login').post(login);
// Usersrouter.route('/register').post(register);
Usersrouter.post('/add',usersPost);
Usersrouter.get('/data',usersGet);
Usersrouter.put('/edit/:id',usersPut);
Usersrouter.delete('/new-data/:id',usersDelete);

module.exports = Usersrouter;
