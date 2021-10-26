const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");

const { checkToken } = require("../middlewares");

router.use("/user", checkToken, userRouter);

module.exports = router;
