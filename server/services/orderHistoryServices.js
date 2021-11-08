const dateNow = require("../helpers/dateNow");
const { OrderHistory } = require("../models");
const userOrderHistoryServices = require("./userOrderHistoryServices");

class OrderHistoryServices {
  async checkIsCurrentOrder() {
    return Boolean(await OrderHistory.findOne({ date: dateNow }));
  }
  async saveCurrentOrders({ userId }) {
    const currentOrders = await userOrderHistoryServices.getCurrentOrders();
    const currentOrdersRequest = await this.createRequest(currentOrders);
    const todaysOrder = new OrderHistory({
      userId,
      date: dateNow,
      order: currentOrdersRequest,
    });
    await todaysOrder.save();
  }

  async createRequest(currentOrders) {
    return currentOrders.reduce((acc, item) => {
      Object.values(item.order).forEach((dish) => {
        if (dish)
          acc = Object.assign(acc, {
            [dish.name]: acc[dish.name] ? acc[dish.name] + 1 : 1,
          });
      });
      return acc;
    }, {});
  }
}
module.exports = new OrderHistoryServices();
