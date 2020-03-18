const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

const Users = require("../routers/users-model");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  //verify the token
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: err });
        console.log(err)
      } else {
        req.jwtToken = decodedToken;
        console.log(" restricted secret.jwtsecret:", secret.jwtSecret);
        console.log("decoded subject:", decodedToken.subject);

        //anything running after this middleware can now use this req.jwtToken
        next();
      }
    });
  } else {
    res.status(400).json({ message: "no token provided" });
  }
};
