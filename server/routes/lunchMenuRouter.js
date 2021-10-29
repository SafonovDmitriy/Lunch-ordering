const Router = require("express");
const router = new Router();
const LunchMenuController = require("../controllers/lunchMenuControllers");

router.get("/", LunchMenuController.getAllLunch);
router.get("/:id", LunchMenuController.getLunchById);
router.post("/add", LunchMenuController.createNewLunchMenu);
router.put("/put/:id", LunchMenuController.updateLunchMenuById);
router.delete("/delete/:id", LunchMenuController.deleteLunchMenuById);

module.exports = router;
