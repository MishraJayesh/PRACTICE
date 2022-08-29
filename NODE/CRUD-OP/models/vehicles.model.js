const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    vehicle_name: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 2) throw new Error("Please Enter Name Of The Vehicle");
        },
    },
    type_of_vehicle: {
        type: String,
        required: true,
    },
    model_no: {
        type: Number,
    },
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;