const express = require("express");
const Upvotes = require("./upvotes-model")
const Users = require("./users-model");
const restricted = require("../middleware/restricted");

const router = express.Router();

// Fetch all users
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "We ran into a problem.  Sorry."})
    });
});

// Fetch user by ID
router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "We ran into an error retrieving the user" });
    })
  }); 

// Fetch all issues created by user
router.get("/:id/issues", restricted, (req, res) => {
  const { id } = req.params;

    Users.getIssuesByUserId(id)
      .then(issues => {
        res.status(200).json({
          message: "You've successfully fetched your issues!",
          issues
        });
    })
      .catch(error => {
        console.log(error)
        res.status(500).json({ 
          message: "We ran into an error retrieving the issues."
        });
      });
});

// Fetch all upvotes for a user
router.get("/:id/upvotes", restricted, (req, res) => {
  const { id } = req.params;

  Upvotes.findVotesBy(id)
    .then(upvotes => {
      console.log(upvotes)
      res.status(200).json(upvotes);
    })
    .catch(error => {
      res
        .status(500)
        .send(error);
    })
})

// Update a user
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.update(id, req.body)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error)
      res
        .status(500)
        .json({ message: "We ran into an error updating the user" });
    });
});

// Delete a user
router.delete("/:id", restricted, async (req, res) => {
  const id = req.params.id;
  try {
    const deleteUser = await Users.remove(id);
    console.log(deleteUser);
    if (deleteUser > 0) {
      res.status(200).json({ message: "The User has been deleted" });
    } else {
      res
        .status(404)
        .json({ message: "Unable to delete the User with that id" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error trying to delete User" });
  }
});

module.exports = router;
