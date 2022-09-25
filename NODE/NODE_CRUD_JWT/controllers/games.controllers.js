const { generateJWTToken } = require('../middlewares/jwt');
const GameModel = require("../models/games.models");

exports.createGame = async function (req, res) {
  if (!req.body.Sports_Name && !req.body.No_Of_Players) {
    res.send({
      message: "Content Can't Be Kept Empty",
    });
  }

  const NewGame = new GameModel(req.body);
  const jwt = generateJWTToken(req.body.Sports_Name);

  try {
    await NewGame.save();
    res.send({
      message: "Sports Data Saved Successfully",
      game_description: NewGame,
      token: jwt,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};