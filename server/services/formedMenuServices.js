const date = require("date-and-time");
const dateNow = require("../helpers/dateNow");
const timeNow = require("../helpers/timeNow");
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
  async checkIsEndDeadLineTime() {
    const formedMenu = await this.generatedMenuToday();
    if (formedMenu && formedMenu.deadlineTime) {
      const today = date.parse(`${dateNow} ${timeNow}`, "DD.MM.YYYY HH:mm");
      const deadLineTimeMoment = date.parse(
        `${dateNow} ${formedMenu.deadlineTime}`,
        "DD.MM.YYYY HH:mm"
      );
      const timeBalanceToOrder = date
        .subtract(deadLineTimeMoment, today)
        .toSeconds();
      return timeBalanceToOrder < 0;
    }
  }
}
module.exports = new FormedMenuServices();
