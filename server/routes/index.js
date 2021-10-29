const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");
const lunchMenuRouter = require("./lunchMenuRouter");
const dishRouter = require("./dishRouter.js");

const { checkToken } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);
router.use("/lunchMenu", lunchMenuRouter);
router.use("/dish", dishRouter);

module.exports = router;
