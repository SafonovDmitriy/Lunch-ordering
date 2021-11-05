const { User } = require("../models");

const ROLE_MAP = {
  USER: "USER",
  ADMIN: "ADMIN",
};

const checkUserRole = async (req, res, next) => {
  const { userId } = req.user;
  try {
    const user = await User.findOne({ _id: userId });

    if (user && user.role === ROLE_MAP.ADMIN) {
      return next();
    }
    return res.status(400).json({ message: "You are not an admin" });
  } catch (error) {
    return res.status(500);
  }
};

module.exports = { checkUserRole };
