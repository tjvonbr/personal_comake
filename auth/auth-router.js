const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtDecode = require('jwt-decode');
const secrets = require("../config/secrets");
const Users = require("../routers/users-model");
const restricted = require("../middleware/restricted");
const validateRegister = require("../middleware/validate-registration");
const validateLogin = require("../middleware/validate-login");
const router = express.Router();

// Register a user
router.post("/register", validateRegister, async (req, res) => {
  try {
    let user = req.body;

    const hash = await bcrypt.hashSync(user.password, 14);
    user.password = hash;

    Users.add(user)
      .then(saved => {
        // Generate token -- still having issues with importing .env value
        const token = generateToken(saved);
        const decodedToken = jwtDecode(token);
        const expiresAt = decodedToken.exp;

        res.status(201).json({
          message: "You've successfully registered!",
          userInfo: {
            id: saved.id,
            username: saved.username,
            first_name: saved.first_name,
            last_name: saved.last_name,
            email: saved.email,
            zipcode: saved.zipcode,
            posted_issues: saved.posted_issues,
            bio: saved.bio,
          },
          token: token,
          expiresAt
        });
      })
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Login a user
router.post("/login", validateLogin, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {

        // Generate token -- still having issues with importing .env value
        const token = generateToken(user);
        const decodedToken = jwtDecode(token);
        const expiresAt = decodedToken.exp;

        res.status(200).json({
          message: "You've successfully logged in!",
          userInfo: {
            id: user.id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            zipcode: user.zipcode,
            posted_issues: user.posted_issues,
            bio: user.bio
          },
          token: token,
          expiresAt
        });
      } else {
        res.status(401).json({ 
          message: "Invalid Credentials"
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

// Generate a token
function generateToken(user) {
  const { id, password } = user;

  const payload = {
    id,
    password
  };

  const secret = process.env.JWT_SECRET || "This still needs to be changed"

  const jwtOptions = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, jwtOptions);
}

module.exports = router;
