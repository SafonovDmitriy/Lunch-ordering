const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");

const { checkToken } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);

module.exports = router;
