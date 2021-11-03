const Router = require("express");
const router = new Router();
const AdminController = require("../controllers/adminControllers.js");

router.get("/users", AdminController.getUsers);
router.put("/balance", AdminController.updateBalanceUser);
router.get("/order", AdminController.shadeAnOrder);

module.exports = router;
