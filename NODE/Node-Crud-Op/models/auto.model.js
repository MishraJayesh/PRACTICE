const mongoose = require("mongoose");

const AutoSchema = new mongoose.Schema({
    vehicle_name: {
        type: String,
        required: true,
    },
    vehicle_type: {
        type: String,
        required: true,
    },
    fule_type: {
        type: String,
        required: true,
    }
})

const Auto = mongoose.model("Auto", AutoSchema);

module.exports = Auto;