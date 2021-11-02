const Router = require("express");
const router = new Router();
const DishController = require("../controllers/dishController.js");

router.get("/", DishController.getAllDish);
router.post("/add", DishController.addDish);
router.put("/put", DishController.updateDishById);
router.delete("/delete", DishController.deleteDishById);
router.get("/:id", DishController.getDishById);

module.exports = router;
