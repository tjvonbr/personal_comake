module.exports = validateIssue;

function validateIssue(req, res, next) {
  const issueInfo = req.body;

  if (!issueInfo.user_id || !issueInfo.title || !issueInfo.description) {
    res.status(400).json({
      message: "You're missing one of the following fields: title or description!"
    });
  } else {
    next();
  }
}
