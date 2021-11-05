const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const authRouter = require("./authRouter.js");
const lunchMenuRouter = require("./lunchMenuRouter");
const dishRouter = require("./dishRouter.js");
const orderRouter = require("./orderRouter.js");
const adminRouter = require("./adminRouter.js");

const { checkUserRole } = require("../middlewares");
const passport = require("passport");

router.use("/auth", authRouter);
router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userRouter
);
router.use(
  "/lunch-menu",
  passport.authenticate("jwt", { session: false }),
  lunchMenuRouter
);
router.use(
  "/dish",
  passport.authenticate("jwt", { session: false }),
  checkUserRole,
  dishRouter
);
router.use(
  "/user-order-history",
  passport.authenticate("jwt", { session: false }),
  orderRouter
);
router.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  checkUserRole,
  adminRouter
);

module.exports = router;
