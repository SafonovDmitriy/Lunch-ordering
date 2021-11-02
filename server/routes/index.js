const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");
const lunchMenuRouter = require("./lunchMenuRouter");
const dishRouter = require("./dishRouter.js");
const orderRouter = require("./orderRouter.js");
const adminRouter = require("./adminRouter.js");

const { checkToken, checkUserRole } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);
router.use("/lunch-menu", checkToken, lunchMenuRouter);
router.use("/dish", checkToken, checkUserRole, dishRouter);
router.use("/user-order-history", checkToken, orderRouter);
router.use("/admin", checkToken, checkUserRole, adminRouter);

module.exports = router;
