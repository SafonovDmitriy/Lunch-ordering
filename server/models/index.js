const mongoose = require("mongoose");
const {
  userSchema,
  dishSchema,
  lunchMenuSchema,
  userOrderHistorySchema,
  orderHistorySchema,
  formedMenuSchema,
} = require("../schemas");

module.exports = {
  User: mongoose.model("User", userSchema),
  LunchMenu: mongoose.model("LunchMenu", lunchMenuSchema),
  Dish: mongoose.model("Dish", dishSchema),
  UserOrderHistory: mongoose.model("UserOrderHistory", userOrderHistorySchema),
  OrderHistory: mongoose.model("OrderHistory", orderHistorySchema),
  FormedMenu: mongoose.model("formedMenu", formedMenuSchema),
};
