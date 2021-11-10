const Router = require("express");
const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const lunchMenuRouter = require("./lunchMenuRouter");
const dishRouter = require("./dishRouter");
const orderRouter = require("./orderRouter");
const adminRouter = require("./adminRouter");
const { checkUserRole } = require("../middlewares");
const passport = require("passport");

const router = new Router();
const protectedRouter = new Router();

protectedRouter.use(passport.authenticate("jwt", { session: false }));
protectedRouter.use("/user", userRouter);
protectedRouter.use("/lunch-menu", lunchMenuRouter);
protectedRouter.use("/dish", checkUserRole, dishRouter);
protectedRouter.use("/user-order-history", orderRouter);
protectedRouter.use("/admin", checkUserRole, adminRouter);

router.use("/auth", authRouter);
router.use(protectedRouter);

module.exports = router;
