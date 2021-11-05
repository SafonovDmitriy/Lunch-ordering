const { Dish, LunchMenu } = require("../models");

class DishController {
  // /dish
  // /
  async getAllDish(req, res) {
    const dishes = await Dish.find({});
    const dishesByCategory = dishes.reduce((acc, dish) => {
      return Object.assign(acc, {
        [dish.type]: [
          ...(acc[dish.type] ? acc[dish.type] : []),
          { _id: dish._id, name: dish.name, image: dish.image },
        ],
      });
    }, {});
    res.status(200).json({
      message: "That's all the dishes what is in the database",
      dishes: dishesByCategory,
    });
  }
  // /:id
  async getDishById(req, res) {
    const { id: dishId } = req.params;
    const dish = await Dish.find({ _id: dishId });

    res.status(200).json({
      message: "That's all the dishes what is in the database",
      dish,
    });
  }
  // /add
  async addDish(req, res) {
    const { name, type } = req.body;
    const newDish = new Dish({
      name,
      type,
      image: "img/defaultPlaceholderDish.png",
    });
    await newDish.save();
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
