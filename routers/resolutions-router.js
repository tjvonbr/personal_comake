const express = require("express");
const Resolutions = require("./resolutions-model");
const restricted = require("../middleware/restricted");
const router = express.Router();

// Fetch all resolutions
router.get("/", restricted, (req, res) => {
  Resolutions.findResolutions()
    .then(resolutions => {
      res.json(resolutions);
    })
    .catch(err => res.json(err));
})

// Post a new resolution
router.post("/", (req, res) => {
  const resolution = req.body;

  Resolutions.insertResolution(resolution)
    .then(response => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch(err => console.log(err));
})

module.exports = router;
