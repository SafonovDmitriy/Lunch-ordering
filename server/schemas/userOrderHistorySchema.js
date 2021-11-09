const mongoose = require("mongoose");

module.exports = {
  userOrderHistorySchema: new mongoose.Schema(
    {
      order: {
        menuId: {
          type: mongoose.Types.ObjectId,
          require: true,
          ref: "LunchMenu",
        },
        firstDish: {
          type: mongoose.Types.ObjectId,
          require: true,
          ref: "Dish",
        },
        secondDish: {
          type: mongoose.Types.ObjectId,
          require: true,
          ref: "Dish",
        },
        salad: { type: mongoose.Types.ObjectId, require: true, ref: "Dish" },
        drink: { type: mongoose.Types.ObjectId, require: true, ref: "Dish" },
      },
      userId: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
      date: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
