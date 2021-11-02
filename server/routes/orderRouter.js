const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController.js");

router.get("/", OrderController.getTheHistoryOfOrders);

module.exports = router;
