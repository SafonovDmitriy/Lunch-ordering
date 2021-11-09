const mongoose = require("mongoose");

module.exports = {
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
};
