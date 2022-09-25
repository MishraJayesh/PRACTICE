require('dotenv').config();
const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGODB_DB_URL;
const connectToDB = async () => {
    mongoose.connect(MONGO_DB_URL, (err) => {
        if (err) throw err;
        console.log("Connected To MongoDB Database");
    });
};

module.exports = connectToDB;