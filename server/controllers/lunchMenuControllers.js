const { LunchMenu, UserOrderHistory } = require("../models");
const date = require("date-and-time");

const dateNow = date.format(new Date(), "YYYY.MM.DD");
class LunchMenuController {
  // /lunch-menu

  // /
  async getAllLunch(req, res) {
    const lunchMenu = await LunchMenu.find({}).populate(
      "firstDish secondDish salad drink"
    );

    res.status(200).json({
      message: "That's all the lanch menu what is in the database",
      lunchMenu,
    });
  }
  // /:id
  async getLunchById(req, res) {}
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
  // /select
  async getSelectLunchMenu(req, res) {
    const { userId } = req.body;

    const lunchMenu = await UserOrderHistory.findOne({
      userId,
      date: dateNow,
    });

    res
      .status(200)
      .json({ selectLunchMenuId: lunchMenu ? lunchMenu.order.menuId : null });
  }
  // /select
  async selectLunchMenu(req, res) {
    const { idLunchMenu, userId } = req.body;

    const isOldOrder = await UserOrderHistory.findOne({
      userId,
      date: dateNow,
    });
    if (isOldOrder)
      return res
        .status(400)
        .json({ message: "You have already done an order today" });

    if (!idLunchMenu)
      return res.status(400).json({ message: "Not selected menu" });

    const lunchMenu = await LunchMenu.findById(idLunchMenu);

    const order = {
      menuId: lunchMenu._id,
      firstDish: lunchMenu.firstDish,
      secondDish: lunchMenu.secondDish,
      salad: lunchMenu.salad,
      drink: lunchMenu.drink,
    };

    const orderLunchMenu = new UserOrderHistory({
      order,
      userId,
      date: dateNow,
    });
    await orderLunchMenu.save();
    res.status(200).json({ message: "You have successfully made an order" });
  }
}

module.exports = new LunchMenuController();
