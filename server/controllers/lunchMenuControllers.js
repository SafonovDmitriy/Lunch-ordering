const { LunchMenu } = require("../models");

class LunchMenuController {
  // /lunchMenu

  // /
  async getAllLanch(req, res) {
    const lunchMenu = await LunchMenu.find({});
    res.status(200).json({
      message: "That's all the lanch menu what is in the database",
      lunchMenu,
    });
  }
  // /:id
  async getLanchById(req, res) {}
  // /add
  async createNewLunchMenu(req, res) {}

  // put/:id
  async updateLunchMenuById(req, res) {}

  // delete/:delete
  async deleteLunchMenuById(req, res) {}
}

module.exports = new LunchMenuController();
// index: { type: Number, require: true },
//       firstDish: { type: String, require: true },
//       secondDish: { type: String, require: true },
//       salad: { type: String, require: true },
//       drink: { type: String, require: true },
//       date: { type: Date },
