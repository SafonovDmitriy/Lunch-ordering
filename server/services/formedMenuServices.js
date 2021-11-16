const { FormedMenu } = require("../models");

class FormedMenuServices {
  async isTheMenuForTodayForToday() {
    return await FormedMenu.findOne(
      { date: dateNow },
      { deadlineTime: 1, isMenuOpen: 1 }
    );
  }
  async generatedMenuToday() {
    return await FormedMenu.findOne({
      date: dateNow,
    });
  }
  async openMenuForUsers() {
    await FormedMenu.findOneAndUpdate({ date: dateNow }, { isMenuOpen: true });
  }
  async updateDeadLineTime(deadlineTime) {
    await FormedMenu.findOneAndUpdate({ date: dateNow }, { deadlineTime });
  }
  async shapeTheMenuToday(deadlineTime) {
    const _formedMenu = new FormedMenu({
      date: dateNow,
      deadlineTime,
    });
    await _formedMenu.save();
  }
}
module.exports = new FormedMenuServices();
