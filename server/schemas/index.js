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
  lanchMenuSchema: new mongoose.Schema(
    {
      index: { type: Number, require: true },
      firstCourse: { type: String, require: true },
      secondCourse: { type: String, require: true },
      salad: { type: String, require: true },
      drink: { type: String, require: true },
      date: { type: Date },
    },
    {
      versionKey: false,
    }
  ),
  dishSchema: new mongoose.Schema(
    {
      name: { type: String, require: true },
      type: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
