module.exports = validateRegister;

function validateRegister(req, res, next) {
  const { email, username, zipCode, password} = req.body;

  if (!email || !username || !zipCode || !password) {
    res
      .status(400)
      .json({ 
        message: "You're missing one of the following fields:  username, email, password, or zip code!" 
      });
  } else {
    next();
  }
}
