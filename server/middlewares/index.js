const date = require("date-and-time");
const dateNow = require("../helpers/dateNow");
const timeNow = require("../helpers/timeNow");
const { User } = require("../models");
const formedMenuServices = require("../services/formedMenuServices");

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
const checkDeadLineTime = async (req, res, next) => {
  const { deadlineTime } = await formedMenuServices.generatedMenuToday();
  const today = date.parse(`${dateNow} ${timeNow}`, "DD.MM.YYYY HH:mm");
  const deadLineTimeMoment = date.parse(
    `${dateNow} ${deadlineTime}`,
    "DD.MM.YYYY HH:mm"
  );
  const timeBalanceToOrder = date
    .subtract(deadLineTimeMoment, today)
    .toSeconds();
  if (timeBalanceToOrder > 0) {
    return next();
  } else {
    return res
      .status(400)
      .json({ message: "Time to create or change the order came out" });
  }
};

module.exports = { checkUserRole, checkDeadLineTime };
