const Router = require("express");
const router = new Router();
const AdminController = require("../controllers/adminControllers.js");

router.get("/users", AdminController.getUsers);

module.exports = router;
