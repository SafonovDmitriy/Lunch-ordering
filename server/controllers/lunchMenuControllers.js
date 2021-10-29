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
  async createNewLunchMenu(req, res) {
    const { firstDishID, secondDishID, saladID, drinkID } = req.body;
    const lunchMenus = await LunchMenu.find({});

    const lunchMenusLength = lunchMenus.length;

    const index = lunchMenusLength + 1;
    if (lunchMenusLength >= 4)
      return res.status(500).json({
        message: "Sorry but we can't store more than 4 menu",
      });
    const newLunchMenu = new LunchMenu({
      index,
      firstDish: firstDishID,
      secondDish: secondDishID,
      salad: saladID,
      drink: drinkID,
    });
    await newLunchMenu.save();
    res.status(200).json({
      message: "That's all the lanch menu what is in the database",
    });
  }

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
