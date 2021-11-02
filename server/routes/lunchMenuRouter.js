const Router = require("express");
const router = new Router();
const LunchMenuController = require("../controllers/lunchMenuControllers");
const { checkUserRole } = require("../middlewares");

router.get("/", LunchMenuController.getAllLunch);
router.get("/select", LunchMenuController.getSelectLunchMenu);
router.get("/:id", LunchMenuController.getLunchById);

router.post("/add", LunchMenuController.createNewLunchMenu);
router.post("/select", LunchMenuController.selectLunchMenu);
router.put("/put", checkUserRole, LunchMenuController.updateLunchMenuById);
router.delete(
  "/delete",
  checkUserRole,
  LunchMenuController.deleteLunchMenuById
);

module.exports = router;
