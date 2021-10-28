const { User } = require("../models");

class UserController {
  async getUser(req, res) {
    const { userId } = req.body;
    const user = await User.findById({ _id: userId });

    const _user = {
      email: user.email,
      role: user.role,
      photo: user.photo,
      balance: user.balance,
    };
    res.status(200).json({ user: _user });
  }

  async logOut(req, res) {
    res.clearCookie("token").send();
  }
}

module.exports = new UserController();
