const { Dish } = require("../models");

class DishServices {
  async findById(id) {
    return await Dish.findById(id);
  }

  async getAllDishes() {
    return await Dish.find({});
  }

  async sortDishesByCategory() {
    const dishes = await this.getAllDishes();
    return dishes.reduce((acc, dish) => {
      return Object.assign(acc, {
        [dish.type]: [
          ...(acc[dish.type] ? acc[dish.type] : []),
          { _id: dish._id, name: dish.name, image: dish.image },
        ],
      });
    }, {});
  }

  async createNewDish({ name, type }) {
    const dish = new Dish({
      name,
      type,
      image: "img/defaultPlaceholderDish.png",
    });
    await dish.save();
  }
}
module.exports = new DishServices();
