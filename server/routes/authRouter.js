const Router = require("express");
const passport = require("passport");
const router = new Router();
const AuthController = require("../controllers/authControllers.js");

router.get("/authorization", AuthController.signIn);
router.post("/registration", AuthController.signUp);
router.get("/verify", AuthController.verify);

module.exports = router;
