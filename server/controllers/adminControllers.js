const chunk = require("../helpers/splitAnArrayToChunk");
const { User } = require("../models");

class AdminController {
  async getUsers(req, res) {
    const { limit, page } = req.query;
    const users = await User.find({});
    const response = chunk(users, limit)[page].reduce((acc, item) => {
      acc.push({ _id: item._id, email: item.email, balance: item.balance });
      return acc;
    }, []);
    res.status(200).json({
      message: "Success",
      users: response,
      total: Math.ceil(users.length / limit),
    });
  }
  async updateBalanceUser(req, res) {
    const { selectUserId: _id, balance } = req.body;
    if (balance < 0 || !balance.toString().length) {
      return res.status(400).json({
        message: "Investigious importance",
      });
    }
    await User.findByIdAndUpdate(_id, { balance });

    res.status(200).json({
      message: "Success",
    });
  }
}

module.exports = new AdminController();
