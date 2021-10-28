const Router = require("express");
const router = new Router();
const LanchMenuController = require("../controllers/lanchMenuControllers");

router.get("/", LanchMenuController.getAllLanch);
router.get("/:id", LanchMenuController.getLanchById);
router.post("/add", LanchMenuController.createNewLanchMenu);
router.put("/put/:id", LanchMenuController.updateLanchMenuById);
router.delete("/delete/:id", LanchMenuController.deleteLanchMenuById);

module.exports = router;
