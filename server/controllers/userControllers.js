const userServices = require("../services/userServices");

class UserController {
  async getUser(req, res) {
    const { userId } = req.user;
    const user = await userServices.findUserById(userId);
    res.status(200).json({ user });
  }

  async logOut(req, res) {
    res.clearCookie("token").status(200).json({});
  }
}

module.exports = new UserController();
