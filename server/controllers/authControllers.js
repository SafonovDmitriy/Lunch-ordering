const { User } = require("../models");
const jwt = require("jsonwebtoken");

const Token = require("../utils/Token");
const Bcrypt = require("../utils/Bcrypt");

const urlForVerification = (email) =>
  `${process.env.CLIENT_URL}verification/${email}`;
class AuthController {
  async signIn(req, res) {
    const { email, password } = req.query;
    if (!email.trim().length || !password.trim().length) {
      return res.status(400).json({ message: "Not complete data" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "No such user" });
    }

    const decodedPass = await new Bcrypt({
      password,
      hashPassword: user.password,
    }).decoded();

    if (!decodedPass) {
      return res.status(401).json({ message: "No such user" });
    }

    if (user.verifyCode) {
      console.log(urlForVerification(email));
      console.log(`verifyCode`, user.verifyCode);
      return res.status(401).json({
        message:
          "Unfortunately, you still did not verify your account, we re-sent you verification code",
      });
    }

    const token = new Token({ _id: user._id });

    res.cookie("token", token.create(), {
      httpOnly: true,
      expires: token.expiryCookies,
    });
    res.status(200).json({ message: "Welcome to Lunch Menu" });
  }

  async signUp(req, res) {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(409).json({ message: "Such a user already exists" });
    }
    const hashPassword = await new Bcrypt({ password }).hash();

    const verifyCode = jwt.sign({}, process.env.JWT_SECRET_KEY);
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
    res.status(200).json({
      message:
        "The user has been successfully created. In order to continue passing verification",
    });
  }

  async verify(req, res) {
    const { email, code } = req.query;
    const { verifyCode: userVerifyCode, _id } = await User.findOne({ email });

    if (userVerifyCode !== code) {
      return res.status(400).json({
        message: "Incorrect code",
      });
    }
    // await User.updateOne({ email }, { $unset: { verifyCode: 1 } });
    const token = new Token({ _id });
    res.cookie("token", token.create(), {
      httpOnly: true,
      expires: token.expiryCookies,
    });
    res.status(200).json({
      message: "You have successfully passed the verification step",
    });
  }
}

module.exports = new AuthController();
