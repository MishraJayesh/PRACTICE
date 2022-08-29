const express = require('express');
const VehicleController = require('../controller/vehicle.controller')
const router = express.Router();

router.post('/create', VehicleController.createVehicle);

module.exports = router;