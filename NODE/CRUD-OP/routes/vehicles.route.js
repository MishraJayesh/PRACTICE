const express = require('express');
const VehicleController = require('../controller/vehicle.controller');
const router = express.Router();

router.post('/create-user', VehicleController.createVehicle);
// router.get('/get-user', VehicleController);
// router.put('/edit-user', VehicleController);
// router.delete('/new-data', VehicleController);  

module.exports = router;