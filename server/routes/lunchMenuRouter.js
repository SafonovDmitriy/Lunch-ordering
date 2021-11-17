const Router = require("express");
const LunchMenuController = require("../controllers/lunchMenuControllers");
const { checkUserRole, checkDeadLineTime } = require("../middlewares");

const router = new Router();

router.get("/", LunchMenuController.getAllLunch);
router.get("/select", LunchMenuController.getSelectLunchMenu);
router.get("/:id", LunchMenuController.getLunchById);
router.post(
  "/cansel-select-menu",
  checkDeadLineTime,
  LunchMenuController.canselSelectMenu
);
router.post("/add", LunchMenuController.createNewLunchMenu);
router.post("/select", checkDeadLineTime, LunchMenuController.selectLunchMenu);
router.put("/put", checkUserRole, LunchMenuController.updateLunchMenuById);
router.delete(
  "/delete",
  checkUserRole,
  LunchMenuController.deleteLunchMenuById
);

module.exports = router;
