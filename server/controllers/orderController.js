const { UserOrderHistory } = require("../models");
const chunk = (arr, size) => {
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, i * size + size));
  }

  return result;
};
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

    res.status(200).json({
      message: "Success",
      userHistory: chunk(userHistoryToOrder.reverse(), limit)[page],
      total: Math.ceil(userHistoryToOrder.length / limit),
    });
  }
}
module.exports = new OrderController();
