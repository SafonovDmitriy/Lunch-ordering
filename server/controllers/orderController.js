const chunk = require("../helpers/splitAnArrayToChunk");
const { UserOrderHistory } = require("../models");

class OrderController {
  //  /user-order-history

  async getTheHistoryOfOrders(req, res) {
    const { userId } = req.body;
    const { limit, page } = req.query;

    const userHistory = await UserOrderHistory.find({ userId }).populate(
      "order.firstDish order.secondDish order.salad order.drink"
    );

    const userHistoryToOrder = [...userHistory].reduce((acc, item) => {
      const {
        order: { menuId, ...dishes },
        date,
        _id,
      } = item;
      const _namesDishes = [];
      for (const key in dishes) {
        _namesDishes.push(dishes[key].name);
      }
      acc.push({ date, description: _namesDishes.join(", "), id: _id });
      return acc;
    }, []);
    const partUserHistoryToOrder = chunk(userHistoryToOrder, limit, page);
    res.status(200).json({
      message: "Success",
      userHistory: partUserHistoryToOrder.reverse() || [],
      total: Math.ceil(userHistoryToOrder.length / limit),
    });
  }
}
module.exports = new OrderController();
