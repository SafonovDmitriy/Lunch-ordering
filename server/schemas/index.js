const mongoose = require("mongoose");

module.exports = {
  userSchema: new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String, require: true },
      surname: { type: String, require: true },
      role: { type: String, require: true },
      photo: { type: String },
      verifyCode: { type: String },
      balance: { type: Number },
    },
    {
      versionKey: false,
    }
  ),
  lunchMenuSchema: new mongoose.Schema(
    {
      index: { type: Number, require: true, unique: true },
      firstDish: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "Dish",
      },
      secondDish: { type: mongoose.Types.ObjectId, require: true, ref: "Dish" },
      salad: { type: mongoose.Types.ObjectId, require: true, ref: "Dish" },
      drink: { type: mongoose.Types.ObjectId, require: true, ref: "Dish" },
    },
    {
      versionKey: false,
    }
  ),
  dishSchema: new mongoose.Schema(
    {
      name: { type: String, require: true },
      type: { type: String, require: true },
      image: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),
  userOrderHistorySchema: new mongoose.Schema(
    {
      idLunchMenu: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref: "LunchMenu",
      },
      idUser: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
      data: { type: Date, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
