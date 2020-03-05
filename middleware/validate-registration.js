module.exports = validateRegister;

function validateRegister(req, res, next) {
  const { email, password, zipCode} = req.body;

  if (!email || !password || !zipCode) {
    res
      .status(400)
      .json({ message: "You're missing one of the following fields:  Email, username, or password" });
  } else {
    next();
  }
}
