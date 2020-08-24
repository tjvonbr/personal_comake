"use strict";

var express = require("express");

var bcrypt = require("bcryptjs");

var axios = require("axios");

var Issues = require("./issues-model");

var Upvotes = require("./upvotes-model");

var restricted = require("../middleware/restricted");

var validateIssue = require("../middleware/validate-issue");

var router = express.Router(); // Fetch all issues

router.get("/", restricted, function (req, res) {
  Issues.find().then(function (issues) {
    res.json(issues);
  })["catch"](function (err) {
    return res.send(err);
  });
}); // Fetch issue by id

router.get("/:id", restricted, function (req, res) {
  var id = req.params.id;
  Issues.findById(id).then(function (issue) {
    res.status(200).json(issue);
  })["catch"](function (error) {
    res.status(500).json(error);
  });
}); // Fetch all issues by zipcode

router.get("/zip/:zipcode", restricted, function (req, res) {
  var zipcode = req.params.zipcode;
  Issues.findByZip(zipcode).then(function (issues) {
    res.status(200).json(issues);
  })["catch"](function (error) {
    res.status(500).json(error);
  });
}); // Create an upvote for an individual issue

router.post("/:id/upvotes", function (req, res) {
  var upvote = req.body;
  Upvotes.insertUpvote(upvote).then(function (response) {
    console.log(response);
    res.status(201).json(response);
  })["catch"](function (error) {
    console.log(error);

    if (error.errno == 19) {
      res.status(500).json({
        message: 'An upvote for this particular issue by this user has already been registered!'
      });
    } else {
      console.log(error);
      res.status(500).json(error);
    }
  });
}); // Fetch upvotes for an individual issue

router.get("/:id/upvotes", restricted, function (req, res) {
  var issue_id = req.params.id;
  Upvotes.findVoteByIssueId(issue_id).then(function (issue) {
    console.log(issue);
    res.status(200).json(issue);
  })["catch"](function (error) {
    res.status(500).json(error);
    console.log(error);
  });
}); // Add an issue

router.post("/", restricted, validateIssue, function (req, res) {
  var issue = req.body;
  Issues.add(issue).then(function (newIssue) {
    res.status(201).json({
      message: "Success!",
      issues: newIssue
    });
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create a new issue!",
      error: error
    });
  });
}); // Update an issue

router.put("/:id", restricted, function (req, res) {
  var id = req.params.id;
  var changes = req.body;
  Issues.update(id, changes).then(function (issue) {
    res.status(200).json(issue);
  })["catch"](function (error) {
    console.log("ERROR", error);
    res.status(500).json({
      message: "We ran into an error updating the issue!"
    });
  });
}); // Delete an issue

router["delete"]("/:id", restricted, function _callee(req, res) {
  var id, deleteIssue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Issues.remove(id));

        case 4:
          deleteIssue = _context.sent;

          if (deleteIssue > 0) {
            res.status(200).json({
              message: "The Issue has been deleted"
            });
          } else {
            res.status(404).json({
              message: "Unable to delete the Issue with that id"
            });
          }

          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: "Error trying to delete Issue"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // Add a resolution vote

router.patch("/:id", restricted, function _callee2(req, res) {
  var id, changes, updated;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          changes = req.body;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Issues.update(id, changes));

        case 5:
          updated = _context2.sent;
          res.status(200).json(updated);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
module.exports = router;