const orderHistoryServices = require("../services/orderHistoryServices");
const UserServices = require("../services/userServices");

class AdminController {
  async getUsers(req, res) {
    const users = await UserServices.getUsers(req.query);
    res.status(200).json(users);
  }

  async updateBalanceUser(req, res) {
    const { balance, selectUserId } = req.body;

    if (balance < 0 || !balance.toString().length) {
      return res.status(415).json({
        message: "Investigious importance",
      });
    }
    await UserServices.updateBalanceForUsers({
      selectUserId,
      balance,
    });

    res.status(200).json();
  }

  async placeAnOrder(req, res) {
    const isCurrentOrder = await orderHistoryServices.checkIsCurrentOrder();
    if (isCurrentOrder)
      return res
        .status(400)
        .json({ message: "Today I was already placed an order" });

    await orderHistoryServices.saveCurrentOrders({ ...req.user });

    res.status(200).json({ message: "The order wassubmitted successfully" });
  }
}

module.exports = new AdminController();
