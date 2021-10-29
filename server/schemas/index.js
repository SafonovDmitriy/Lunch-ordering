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
      firstDish: { type: mongoose.Types.ObjectId, require: true },
      secondDish: { type: mongoose.Types.ObjectId, require: true },
      salad: { type: mongoose.Types.ObjectId, require: true },
      drink: { type: mongoose.Types.ObjectId, require: true },
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
      idLunchMenu: { type: mongoose.Types.ObjectId, require: true },
      idUser: { type: mongoose.Types.ObjectId, require: true },
      data: { type: Date, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
