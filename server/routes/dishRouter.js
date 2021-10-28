const Router = require("express");
const router = new Router();
const DishController = require("../controllers/dishController.js");

router.get("/", DishController.getAllDish);
router.get("/:id", DishController.getDishById);
router.post("/add", DishController.addDish);
router.put("/put", DishController.updateDishById);
router.delete("/delete", DishController.deleteDishById);

module.exports = router;
