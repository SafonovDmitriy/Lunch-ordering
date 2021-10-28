const mongoose = require("mongoose");
const { userSchema, dishSchema, lanchMenuSchema } = require("../schemas");

module.exports = {
  User: mongoose.model("User", userSchema),
  LanchMenu: mongoose.model("LanchMenu", lanchMenuSchema),
  Dish: mongoose.model("Dish", dishSchema),
};
