const Router = require("express");
const router = new Router();
const DishController = require("../controllers/dishController.js");

router.get("/", DishController.getAllDish);
router.get("/:id", DishController.getDishById);
router.post("/add", DishController.addDish);
router.put("/put/:id", DishController.updateDishById);
router.delete("/delete/:id", DishController.deleteDishById);

module.exports = router;
