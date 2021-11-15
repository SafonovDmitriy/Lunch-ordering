const { userSchema } = require("./userSchema");
const { lunchMenuSchema } = require("./lunchMenuSchema");
const { dishSchema } = require("./dishSchema");
const { userOrderHistorySchema } = require("./userOrderHistorySchema");
const { orderHistorySchema } = require("./orderHistorySchema");
const { formedMenuSchema } = require("./formedMenuSchema");
module.exports = {
  userSchema,
  lunchMenuSchema,
  dishSchema,
  userOrderHistorySchema,
  orderHistorySchema,
  formedMenuSchema,
};
