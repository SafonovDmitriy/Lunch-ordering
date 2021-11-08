const userOrderHistoryServices = require("../services/userOrderHistoryServices");

class OrderController {
  //  /user-order-history

  async getTheHistoryOfOrders(req, res) {
    const usersHistoryOrders =
      await userOrderHistoryServices.getUsersHistoryOrders({
        ...req.user,
        ...req.query,
      });

    res.status(200).json(usersHistoryOrders);
  }
}
module.exports = new OrderController();
