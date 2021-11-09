const mongoose = require("mongoose");

module.exports = {
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
};
