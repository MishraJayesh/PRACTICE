const mongoose = require("mongoose");
const GamesSchema = new mongoose.Schema({
    Sports_Name: {
        type: String,
        required: true,
        validate(value) {
            if (value.lenght < 2) throw new Error(" Please Enter Sports Name With More Than Two characters");
        },
    },
    No_Of_Players: {
        type: Number,
        default: 2,
        validate(value) {
            if (value < 2) throw new Error("At Least Two Players Must Be Specified");
        },
    },
    Name_Of_Players: {
        type: Array,
    },
    Equipments_Of_Sports: {
        type: Array,
    }
});

const Game = mongoose.model("Game", GamesSchema);

module.exports = Game;