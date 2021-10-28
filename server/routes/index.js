const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");
const lanchMenuRouter = require("./lanchMenuRouter");
const dishRouter = require("./dishRouter.js");

const { checkToken } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);
router.use("/lanchMenu", checkToken, lanchMenuRouter);
router.use("/dish", dishRouter);

module.exports = router;
