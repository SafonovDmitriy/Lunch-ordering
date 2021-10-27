const Router = require("express");
const router = new Router();
const AuthController = require("../controllers/authControllers.js");

router.get("/authorization", AuthController.signIn);
router.post("/registration", AuthController.signUp);

module.exports = router;
