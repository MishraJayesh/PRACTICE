require ("dotenv").config();
const jwt = require("jsonwebtoken");
const APP_SECRET = process.env.JWTSECRET;

function generateJWTToken(User_Name) {
    console.log("PJM");
    return jwt.sign(
        {
            data: User_Name,
        },
        APP_SECRET,
        {expiresIn: 60 * 60 }
    );
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["Authorization"];
    const token = authHeader.split(" ")[1];
    if (token === null) return res.send("No Token Found!");
    const decodedToken = jwt.verify(token, APP_SECRET, function (err, user) {
      if (err) return res.send({ Error: err });
      req.body.user = user;
    });
    next();
  }
  
  module.exports = {
    generateJWTToken,
    authenticateToken,
  };