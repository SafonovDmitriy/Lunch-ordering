const { LunchMenu } = require("../models");

class LunchMenuServices {
  async getById() {
    return await LunchMenu.findById(id);
  }
  async getAllLunchMenus() {
    return await LunchMenu.find({}).populate(
      "firstDish secondDish salad drink"
    );
  }
  async createNewLunchMenu({ firstDishID, secondDishID, saladID, drinkID }) {
    const index = (await this.getLengthDocuments()) + 1;
    const newLunchMenu = new LunchMenu({
      index,
      firstDish: firstDishID,
      secondDish: secondDishID,
      salad: saladID,
      drink: drinkID,
    });
    await newLunchMenu.save();
  }
  async getLengthDocuments() {
    return await LunchMenu.countDocuments();
  }
  async updateLunchMenuById({ dishId, dishType, lunchId }) {
    await LunchMenu.findByIdAndUpdate(lunchId, {
      [dishType]: dishId,
    });
  }
}
module.exports = new LunchMenuServices();
