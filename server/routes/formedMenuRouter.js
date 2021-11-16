const Router = require("express");
const router = new Router();
const FormedMenuController = require("../controllers/formedMenuController.js");

router.get("/", FormedMenuController.isTheMenuFormedToday);
router.put("/", FormedMenuController.updateMenuFormedToday);
router.post("/deadline-time", FormedMenuController.saveDeadlineTimeForOrder);

module.exports = router;
