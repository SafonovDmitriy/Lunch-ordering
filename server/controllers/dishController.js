const DishServices = require("../services/dishServices");

class DishController {
  // /dish
  // /
  async getAllDish(req, res) {
    const dishesByCategory = await DishServices.sortDishesByCategory();
    res.status(200).json({
      message: "That's all the dishes what is in the database",
      dishes: dishesByCategory,
    });
  }
  // /:id
  async getDishById(req, res) {
    const { id: dishId } = req.params;
    const dish = await DishServices.findById(dishId);

    res.status(200).json({
      message: "That's all the dishes what is in the database",
      dish,
    });
  }
  // /add
  async addDish(req, res) {
    await DishServices.createNewDish({ ...req.body });

    res.status(200).json({
      message: "Successfully created new dish",
    });
  }

  // /put
  async updateDishById(req, res) {}

  // /delete
  async deleteDishById(req, res) {}
}

module.exports = new DishController();
