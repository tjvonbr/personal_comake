const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

const Users = require("../routers/users-model");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  //verify the token
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "There has been en error retrieving the token!" });
        console.log(err)
      } else {
        req.jwtToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token has been provided!" });
  }
};
