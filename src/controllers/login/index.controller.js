const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  try {
  const { username, password } = req.body;
  const user = {
    name: username
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({
    accessToken: accessToken
  })
  } catch (error) {
    res.status(status.error).json({'MessageBody':'An Error occured, try later'});
  }
}

module.exports = {
  loginUser
}
