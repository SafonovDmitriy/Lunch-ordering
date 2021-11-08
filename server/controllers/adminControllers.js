const dateNow = require("../helpers/dateNow");

const { User, UserOrderHistory, OrderHistory } = require("../models");

class AdminController {
  async getUsers(req, res) {
    const { limit, page } = req.query;
    const users = await User.find(
      {},
      { password: 0, role: 0, photo: 0 },
      {
        limit: Number(limit),
        skip: limit * page,
      }
    );
    const usersLength = await User.countDocuments();
    const totalPage = Math.ceil(usersLength / limit);

    res.status(200).json({ users, totalPage });
  }

  async updateBalanceUser(req, res) {
    const { selectUserId: _id, balance } = req.body;
    const { userId } = req.user;
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

  async placeAnOrder(req, res) {
    const { userId } = req.user;
    const prevTodaysOrder = await OrderHistory.findOne({ date: dateNow });
    if (prevTodaysOrder) {
      return res
        .status(400)
        .json({ message: "Today I was already placed an order" });
    }

    const userOrders = await UserOrderHistory.find(
      { date: dateNow },
      { _id: 0, userId: 0, date: 0, order: 1, order: { menuId: 0 } }
    ).populate("order.firstDish order.secondDish order.salad order.drink");
    const ORDERS_MAP = userOrders.reduce((acc, item) => {
      Object.values(item.order).forEach((dish) => {
        if (dish)
          acc = Object.assign(acc, {
            [dish.name]: acc[dish.name] ? acc[dish.name] + 1 : 1,
          });
      });
      return acc;
    }, {});

    const todaysOrder = new OrderHistory({
      userId,
      date: dateNow,
      order: ORDERS_MAP,
    });
    await todaysOrder.save();
    res.status(200).json({ message: "The order wassubmitted successfully" });
  }
}

module.exports = new AdminController();
