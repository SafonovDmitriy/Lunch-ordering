const dateNow = require("../helpers/dateNow");
const { UserOrderHistory } = require("../models");
const lunchMenuServices = require("./lunchMenuServices");
const userServices = require("./userServices");

class UserOrderHistoryServices {
  async getUsersHistoryOrders({ userId, limit, page }) {
    const userHistory = await this.makeUserHistory({ userId, limit, page });
    const totalPage = await this.getTotalPage({ limit, userId });
    return { userHistory, totalPage };
  }
  async makeUserHistory({ userId, limit, page }) {
    const userHistory = await this.getOrdersUsersHistoryByIdWithPagination({
      userId,
      limit,
      page,
    });
    return [...userHistory].reduce((acc, item) => {
      const namesDishes = [];
      Object.values(item.order).forEach((dish) => {
        if (dish && dish.name) namesDishes.push(dish.name);
      });

      acc.push({
        date: item.date,
        description: namesDishes.join(", "),
        id: item._id,
      });
      return acc;
    }, []);
  }
  async getOrdersUsersHistoryByIdWithPagination({ userId, page, limit }) {
    return await UserOrderHistory.find({ userId })
      .sort({ date: -1 })
      .skip(page * Number(limit))
      .limit(Number(limit))
      .populate("order.firstDish order.secondDish order.salad order.drink");
  }

  async getTotalPage({ limit, userId }) {
    const userOrderHistoryLength = await UserOrderHistory.countDocuments({
      userId,
    });
    return Math.ceil(userOrderHistoryLength / limit);
  }

  async getCurrentOrders() {
    return await UserOrderHistory.find(
      { date: dateNow },
      { _id: 0, userId: 0, date: 0, order: 1, order: { menuId: 0 } }
    ).populate("order.firstDish order.secondDish order.salad order.drink");
  }

  async checkIsCurrentOrdersByIdUser(userId) {
    return Boolean(
      await UserOrderHistory.find(
        { date: dateNow, userId },
        { _id: 0, userId: 0, date: 0, order: 1, order: { menuId: 0 } }
      ).populate("order.firstDish order.secondDish order.salad order.drink")
        .length
    );
  }

  async getIdCurrentOrderForUserWithId(userId) {
    const idSelectMenu = await UserOrderHistory.findOne(
      {
        userId,
        date: dateNow,
      },
      { order: { menuId: 1 } }
    );
    return idSelectMenu && idSelectMenu.order.menuId
      ? idSelectMenu.order.menuId
      : null;
  }

  async createNewUsersOrder({ userId, idLunchMenu }) {
    const lunchMenu = await lunchMenuServices.getById(idLunchMenu);
    const order = {
      menuId: lunchMenu._id,
      firstDish: lunchMenu.firstDish,
      secondDish: lunchMenu.secondDish,
      salad: lunchMenu.salad,
      drink: lunchMenu.drink,
    };
    const orderLunchMenu = new UserOrderHistory({
      order,
      userId,
      date: dateNow,
    });
    await orderLunchMenu.save();
  }
  async cancelCurrentOrder({ userId }) {
    const oldOrder = await UserOrderHistory.findOne({ userId, date: dateNow });
    if (!!oldOrder) {
      const totalPrice = await lunchMenuServices.getTotalPriceByIdMenu(
        oldOrder.order.menuId
      );
      const { balance } = await userServices.findUserById(userId, {
        balance: 1,
      });
      await userServices.updateBalanceForUsers({
        selectUserId: userId,
        balance: balance + totalPrice,
      });
      await UserOrderHistory.findOneAndDelete({
        userId,
        date: dateNow,
      });
    }
  }
}
module.exports = new UserOrderHistoryServices();
