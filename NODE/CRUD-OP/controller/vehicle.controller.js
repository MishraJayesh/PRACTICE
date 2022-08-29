const VehicleModel = require("../models/vehicles.model");

exports.createVehicle = async function (req, res) {

    if (!req.body.vehicle_name && !req.body.type_of_vehicle) {
        res.send({
            message: "Content Can Not Be Empty",
        });
    }

    const NewVehicle = new VehicleModel(req.body);

    try {
        await NewVehicle.save();
        res.send({
            message: "Vehicle Saved Successfully",
            vehicle_description: NewVehicle,
        });
    } catch (error) {
        res.send({ message: error.message });
    }

};