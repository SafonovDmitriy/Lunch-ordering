const { User } = require("../models");

const Token = require("../utils/Token");
const Bcrypt = require("../utils/Bcrypt");

class AuthController {
  async signIn(req, res) {
    const { email, password } = req.query;
    if (!email.trim().length || !password.trim().length) {
      return res.status(400).json();
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No such user" });
    }
    const decodedPass = await new Bcrypt({
      password,
      hashPassword: user.password,
    }).decoded();

    if (!decodedPass) {
      return res.status(400).json({ message: "No such user" });
    }
    const token = new Token({ _id: user._id });

    res
      .cookie("token", token.create(), {
        httpOnly: true,
        expires: token.expiryCookies,
      })
      .send();
  }
  async signUp(req, res) {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(409).json({ message: "Such a user already exists" });
    }
    const hashPassword = await new Bcrypt({ password }).hash();

    const user = new User({
      email,
      password: hashPassword,
      role: "USER",
      photo: "img/avatar.png",
      balance: 0,
    });
    await user.save();

    const token = new Token({ _id: user._id });
    res
      .cookie("token", token.create(), {
        httpOnly: true,
        expires: token.expiryCookies,
      })
      .send();
  }
}

module.exports = new AuthController();
