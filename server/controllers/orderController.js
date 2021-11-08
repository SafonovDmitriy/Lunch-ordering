const { UserOrderHistory } = require("../models");

class OrderController {
  //  /user-order-history

  async getTheHistoryOfOrders(req, res) {
    const { userId } = req.user;
    const { limit, page } = req.query;

    const userHistory = await UserOrderHistory.find(
      { userId },
      {},
      { limit: Number(limit), skip: page * limit }
    ).populate("order.firstDish order.secondDish order.salad order.drink");
    const userOrderHistoryLength = await UserOrderHistory.countDocuments();
    const totalPage = Math.ceil(userOrderHistoryLength / limit);
    const userHistoryToOrder = [...userHistory].reduce((acc, item) => {
      const { order, date, _id } = item;

      const _namesDishes = [];
      Object.values(order).forEach((dish) => {
        if (dish && dish.name) _namesDishes.push(dish.name);
      });

      acc.push({ date, description: _namesDishes.join(", "), id: _id });
      return acc;
    }, []);

    res
      .status(200)
      .json({ userHistory: userHistoryToOrder.reverse() || [], totalPage });
  }
}
module.exports = new OrderController();
