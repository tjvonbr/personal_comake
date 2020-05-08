const express = require("express");
const bcrypt = require("bcryptjs");
const axios = require("axios");

const Issues = require("./issues-model");
const Upvotes = require("./upvotes-model");
const restricted = require("../middleware/restricted");
const validateIssue = require("../middleware/validate-issue");

const router = express.Router();

// Fetch all issues
router.get("/", restricted, (req, res) => {
  console.log("req.jwtToken", req.jwtToken);
  Issues.find()
    .then(issues => {
      res.json(issues);
    })
    .catch(err => res.send(err));
});

// Fetch issue by id
router.get("/:id", restricted, async (req, res) => {
  const id = req.params.id;

  try {
    const issue = await Issues.findById(id);
    if (issue) {
      res.status(200).json(getIssue);
    } else {
      res.status(404).json({ message: "wrong user info" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "We ran into an error retrieving the user" });
  }
});

// Create an upvote for an individual issue
router.post("/:id/upvotes", restricted, (req, res) => {
  const upvote = req.body;
  const {id} = req.params;

  Upvotes.insertUpvote(upvote, id)
    .then(saved => {
      res.status(201).json({saved})
    })
    .catch(error => {
      console.log(error);
      if (error.errno == 19) {
        res.status(500).json({message: 'An upvote for this particular issue by this user has already been registered!'});
      } else {
        res.status(500).json(error)
      }
    })
});

// Fetch upvotes for an individual issue
router.get("/:id/upvotes", restricted, (req, res) => {
  const issue_id = req.params.id;
  
  Upvotes.findVoteByIssueId(issue_id)
  .then(issue => {
    console.log(issue)
    res.status(200).json(issue)
  })
  .catch(error => {
    res.status(500).json(error)
    console.log(error)
  })
})

// Add an issue
router.post("/", restricted, validateIssue, (req, res) => {
  const issue = req.body;

  Issues.add(issue)
    .then(newIssue => {
      console.log(newIssue);
      res.status(201).json(newIssue);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

// Update an issue
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Issues.update(id, changes)
    .then(issue => {
      res.status(200).json(issue);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error updating the issue!" });
    });
});

// Delete an issue
router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  try {
    const deleteIssue = await Issues.remove(id);
    console.log(deleteIssue);
    if (deleteIssue > 0) {
      res.status(200).json({ message: "The Issue has been deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Unable to delete the Issue with that id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error trying to delete Issue" });
  }
});

module.exports = router;
