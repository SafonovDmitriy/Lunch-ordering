const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");
const lunchMenuRouter = require("./lunchMenuRouter");
const dishRouter = require("./dishRouter.js");
const orderRouter = require("./orderRouter.js");

const { checkToken } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);
router.use("/lunch-menu", checkToken, lunchMenuRouter);
router.use("/dish", dishRouter);
router.use("/user-order-history", checkToken, orderRouter);

module.exports = router;
