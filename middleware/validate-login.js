module.exports = validateLogin;

function validateLogin(req, res, next) {
  const {username, password} = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Please make sure you're entering both a username and password!" });
  } else {
    next();
  }
}
