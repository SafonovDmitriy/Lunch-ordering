const FormedMenuServices = require("../services/formedMenuServices.js");

class FormedMenuController {
  // /formed-menu
  // /
  async isTheMenuFormedToday(req, res) {
    const isFormedMenuToday =
      await FormedMenuServices.isTheMenuForTodayForToday();
    res.status(200).json(isFormedMenuToday);
  }
  // /
  async updateMenuFormedToday(req, res) {
    const formedMenu = await FormedMenuServices.generatedMenuToday();
    if (formedMenu && formedMenu.deadlineTime) {
      FormedMenuServices.openMenuForUsers();
    } else {
      return res
        .status(400)
        .json({ message: "To begin with, set the extreme time for orders." });
    }
    res.status(200).json({ message: "The menu is open" });
  }
  async saveDeadlineTimeForOrder(req, res) {
    const { deadlineTime } = req.body;
    const formedMenu = await FormedMenuServices.generatedMenuToday();
    if (formedMenu) {
      await FormedMenuServices.updateDeadLineTime(deadlineTime);
    } else {
      await FormedMenuServices.shapeTheMenuToday(deadlineTime);
    }
    res
      .status(200)
      .json({ message: "An extreme time of order possibilities was changed" });
  }
}

module.exports = new FormedMenuController();
