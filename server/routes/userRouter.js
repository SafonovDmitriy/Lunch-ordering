const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userControllers");

router.get("/", UserController.getUser);
router.get("/logout", UserController.logOut);

module.exports = router;
