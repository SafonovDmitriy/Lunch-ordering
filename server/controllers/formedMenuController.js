const dateNow = require("../helpers/dateNow");
const { FormedMenu } = require("../models");

class FormedMenuController {
  // /formed-menu
  // /
  async isTheMenuFormedToday(req, res) {
    const isFormedMenuToday = await FormedMenu.findOne(
      { date: dateNow },
      { deadlineTime: 1, isMenuOpen: 1 }
    );
    res.status(200).json(isFormedMenuToday);
  }
  // /
  async updateMenuFormedToday(req, res) {
    const formedMenu = await FormedMenu.findOne({ date: dateNow });
    if (formedMenu && formedMenu.deadlineTime) {
      await FormedMenu.findOneAndUpdate(
        { date: dateNow },
        { isMenuOpen: true }
      );
    } else {
      return res
        .status(400)
        .json({ message: "To begin with, set the extreme time for orders." });
    }
    res.status(200).json({ message: "The menu is open" });
  }
  async saveDeadlineTimeForOrder(req, res) {
    const { deadlineTime } = req.body;
    const formedMenu = await FormedMenu.findOne({ date: dateNow });
    if (formedMenu) {
      await FormedMenu.findOneAndUpdate({ date: dateNow }, { deadlineTime });
    } else {
      const _formedMenu = new FormedMenu({
        date: dateNow,
        deadlineTime,
      });
      await _formedMenu.save();
    }
    res
      .status(200)
      .json({ message: "An extreme time of order possibilities was changed" });
  }
}

module.exports = new FormedMenuController();
