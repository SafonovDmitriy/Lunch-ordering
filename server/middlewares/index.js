const { User } = require("../models");
const Token = require("../utils/Token");

const checkToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token || token == null) {
    return res.status(412).json({ message: "No token" });
  }
  const decoded = new Token({ token }).decoded();

  if (decoded) {
    req.body._id = decoded._id;
    next();
  } else {
    return res.status(401).json({ message: "Token expired" });
  }
};

const checkUserRole = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const user = await User.findOne({ _id });
    if (user && user.role === "ADMIN") {
      return next();
    }
    return res.status(400).json({ message: "You are not an admin" });
  } catch (error) {
    return res.status(500);
  }
};

module.exports = { checkToken, checkUserRole };
