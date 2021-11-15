const Router = require("express");
const router = new Router();
const FormedMenuController = require("../controllers/formedMenuController.js");

router.get("/", FormedMenuController.isTheMenuFormedToday);
router.put("/", FormedMenuController.updateMenuFormedToday);
router.post("/deadline-time", FormedMenuController.saveDeadlineTimeForOrder);
// router.put("/put", FormedMenuController.updateDishById);
// router.delete("/delete", FormedMenuController.deleteDishById);
// router.get("/:id", FormedMenuController.getDishById);

module.exports = router;
