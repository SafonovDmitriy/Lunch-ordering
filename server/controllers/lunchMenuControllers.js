const lunchMenuServices = require("../services/lunchMenuServices");
const orderHistoryServices = require("../services/orderHistoryServices");
const userOrderHistoryServices = require("../services/userOrderHistoryServices");
const userServices = require("../services/userServices");

class LunchMenuController {
  // /lunch-menu

  // /
  async getAllLunch(req, res) {
    const lunchMenu = await lunchMenuServices.getAllLunchMenus();

    res.status(200).json({
      message: "The menu has been updated",
      lunchMenu,
    });
  }
  // /:id
  async getLunchById(req, res) {}
  // /add
  async createNewLunchMenu(req, res) {
    const lunchMenusLength = await lunchMenuServices.getLengthDocuments();

    if (lunchMenusLength >= 4)
      return res.status(500).json({
        message: "Sorry but we can't store more than 4 menu",
      });
    await lunchMenuServices.createNewLunchMenu({
      ...req.body,
    });

    res.status(200).json({
      message: "That's all the lanch menu what is in the database",
    });
  }

  // put
  async updateLunchMenuById(req, res) {
    await lunchMenuServices.updateLunchMenuById({
      ...req.body,
    });

    res.status(200).json({ message: "Success" });
  }

  // delete/:delete
  async deleteLunchMenuById(req, res) {}

  // cansel-select-menu/
  async canselSelectMenu(req, res) {
    const { userId } = req.user;
    await userOrderHistoryServices.cancelCurrentOrder({ userId });
    res
      .status(200)
      .json({ message: "You successfully canceled today's order." });
  }

  // /select
  async getSelectLunchMenu(req, res) {
    const { userId } = req.user;
    const selectLunchMenuId =
      await userOrderHistoryServices.getIdCurrentOrderForUserWithId(userId);
    res.status(200).json({ selectLunchMenuId });
  }
  // /select
  async selectLunchMenu(req, res) {
    const { idLunchMenu } = req.body;
    const { userId } = req.user;
    const todaysOrder = await orderHistoryServices.checkIsCurrentOrder();
    if (todaysOrder) {
      return res.status(400).json({
        message:
          "Sorry but the administrator has already made the order and left you hungry",
      });
    }
    await userOrderHistoryServices.cancelCurrentOrder({ userId });

    if (idLunchMenu) {
      const { balance } = await userServices.findUserById(userId, {
        balance: 1,
      });
      const totalPrice = await lunchMenuServices.getTotalPriceByIdMenu(
        idLunchMenu
      );
      if (totalPrice > balance) {
        return res
          .status(400)
          .json({ message: "You do not have enough funds for this order." });
      }

      await userServices.updateBalanceForUsers({
        selectUserId: userId,
        balance: balance - totalPrice,
        userId,
      });

      await userOrderHistoryServices.createNewUsersOrder({
        userId,
        idLunchMenu,
      });

      res.status(200).json({ message: "You have successfully made an order" });
    }
  }
}

module.exports = new LunchMenuController();
