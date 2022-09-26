const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

    User_Name: {
        type: String,
        unique: true,
        required: true,
        min: 6,
        max: 255,
    },
    Email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    Password: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    }
    // Mobile_No: {
    //     type: Number,
    //     default: 0
    // },
    // City: {
    //     type: String,
    //     required: true
    // }

})

const UsersModel = mongoose.model("UsersModel", UsersSchema);

module.exports = UsersModel;