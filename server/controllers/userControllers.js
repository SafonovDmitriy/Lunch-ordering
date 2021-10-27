const { User } = require("../models");

class UserController {
  async getUser(req, res) {
    const { _id } = req.body;
    const user = await User.findById(_id);

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
