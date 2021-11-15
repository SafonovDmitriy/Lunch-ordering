const mongoose = require("mongoose");

module.exports = {
  orderHistorySchema: new mongoose.Schema(
    {
      order: { type: Object },
      userId: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
      date: { type: String, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
