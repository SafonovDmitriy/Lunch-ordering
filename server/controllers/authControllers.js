const Token = require("../utils/Token");
const Bcrypt = require("../utils/Bcrypt");
const userServices = require("../services/userServices");

const urlForVerification = (email) =>
  `${process.env.CLIENT_URL}verification/${email}`;
class AuthController {
  async signIn(req, res) {
    const { email, password } = req.query;
    if (!email.trim().length || !password.trim().length) {
      return res.status(400).json({ message: "Not complete data" });
    }
    const user = await userServices.findUserByEmail({ email });
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
    const { email } = req.body;
    const candidate = await userServices.findUserByEmail({ email });
    if (candidate) {
      return res.status(409).json({ message: "Such a user already exists" });
    }
    await userServices.createNewUser(req.body);
    res.status(200).json({
      message:
        "The user has been successfully created. In order to continue passing verification",
    });
  }

  async verify(req, res) {
    const { email, code } = req.query;
    const { verifyCode: userVerifyCode, _id } =
      await userServices.findUserByEmail({ email });
    if (!userVerifyCode)
      return res.status(400).json({
        message: "You have already verified your account",
      });
    if (userVerifyCode !== code)
      return res.status(400).json({
        message: "Incorrect code",
      });
    await userServices.verifyUser({ email });
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
