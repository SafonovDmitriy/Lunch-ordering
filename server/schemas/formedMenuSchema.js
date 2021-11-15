const mongoose = require("mongoose");

module.exports = {
  formedMenuSchema: new mongoose.Schema(
    {
      date: { type: String, require: true },
      deadlineTime: { type: String, require: true },
      isMenuOpen: { type: Boolean, require: true },
    },
    {
      versionKey: false,
    }
  ),
};
