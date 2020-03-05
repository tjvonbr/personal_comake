const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
const Users = require("../routers/users-model");
const restricted = require("../middleware/restricted");
const validateRegister = require("../middleware/validate-registration");
const validateLogin = require("../middleware/validate-login");
const router = express.Router();

// Check to see if secret is coming through from .env file
console.log("SECRET", process.env.JWT_SECRET)

router.post("/register", validateRegister, (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", validateLogin, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        // Generate token -- still having issues with importing .env value
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          id: user.id,
          zipCode: user.zipCode,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log(error);

      res.status(500).json(error);
    });
});

const generateToken = user => {
  const payload = {
    id: user.id,
    email: user.email
  };

  // Need to change from string to .env variable
  const secret = process.env.JWT_SECRET || "This still needs to be changed"

  const jwtOptions = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, jwtOptions);
}

module.exports = router;
