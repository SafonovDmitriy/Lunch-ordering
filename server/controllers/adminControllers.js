const dateNow = require("../helpers/dateNow");
const chunk = require("../helpers/splitAnArrayToChunk");
const { User, UserOrderHistory, OrderHistory } = require("../models");

class AdminController {
  async getUsers(req, res) {
    const { limit, page } = req.query;

    const users = await User.find({});
    const totalPage = Math.ceil(users.length / limit);
    const partUsers = chunk(users, limit, page);

    const response = partUsers.reduce((acc, item) => {
      acc.push({ _id: item._id, email: item.email, balance: item.balance });
      return acc;
    }, []);
    res.status(200).json({
      message: "Success",
      users: response,
      total: totalPage,
    });
  }
  async updateBalanceUser(req, res) {
    const { selectUserId: _id, balance, userId } = req.body;
    if (balance < 0 || !balance.toString().length) {
      return res.status(400).json({
        message: "Investigious importance",
      });
    }
    await User.findByIdAndUpdate(_id, { balance });

    res.status(200).json({
      message: "Success",
      mainUser: _id === userId ? { balance } : null,
    });
  }
  async shadeAnOrder(req, res) {
    const { userId } = req.body;
    const prevTodaysOrder = await OrderHistory.findOne({ date: dateNow });
    if (prevTodaysOrder) {
      return res
        .status(400)
        .json({ message: "Today I was already placed an order" });
    }

    const userHistory = await UserOrderHistory.find({ date: dateNow }).populate(
      "order.firstDish order.secondDish order.salad order.drink"
    );
    const order = userHistory.reduce((acc, item) => {
      const { order: ItemOrder } = item;

      Object.values(ItemOrder).forEach((item) => {
        if (item.name) {
          acc = Object.assign(acc, {
            [item.name]: acc[item.name] ? acc[item.name] + 1 : 1,
          });
        }
      });

      return acc;
    }, {});
    const todaysOrder = new OrderHistory({ userId, date: dateNow, order });
    await todaysOrder.save();
    console.log(`order`, order);
    res.status(200).json({ message: "Success" });
  }
}
// order: { type: Object },
//       userId: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
//       date: { type: String, require: true },
module.exports = new AdminController();
