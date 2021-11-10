const { User } = require("../models");
const BcryptService = require("../utils/BcryptService");
const TokenService = require("../utils/TokenService");

const urlForVerification = (email) =>
  `${process.env.CLIENT_URL}verification/${email}`;
class UserServices {
  async getUsers({ limit, page }) {
    const users = await this.getUsersWithPagination({ limit, page });
    const totalPage = await this.getTotalPagesForUsers({ limit });
    return { users, totalPage };
  }

  async getUsersWithPagination({ limit, page }) {
    return await User.find(
      {},
      { password: 0, role: 0, photo: 0 },
      {
        limit: Number(limit),
        skip: limit * page,
      }
    );
  }

  async getTotalPagesForUsers({ limit }) {
    const usersLength = await User.countDocuments();
    return Math.ceil(usersLength / limit);
  }

  async updateBalanceForUsers({ selectUserId: _id, balance, userId }) {
    await User.findByIdAndUpdate(_id, { balance });
    return { mainUser: _id === userId ? { balance } : null };
  }
  async findUserByEmail({ email }) {
    return await User.findOne({ email });
  }
  async findUserById({ userId }) {
    return User.findById(userId, { password: 0 });
  }
  async createNewUser({ email, password }) {
    const hashPassword = await BcryptService.hash({ password });
    const verifyCode = TokenService.createEmptyToken();
    const user = new User({
      email,
      password: hashPassword,
      role: "USER",
      photo: "img/avatar.png",
      balance: 0,
      verifyCode,
    });
    await user.save();
    console.log(urlForVerification(email));
    console.log(`verifyCode`, verifyCode);
  }
  async verifyUser({ email }) {
    await User.updateOne({ email }, { $unset: { verifyCode: 1 } });
  }
}
module.exports = new UserServices();
