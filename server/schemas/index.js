const { userSchema } = require("./userSchema");
const { lunchMenuSchema } = require("./lunchMenuSchema");
const { dishSchema } = require("./dishSchema");
const { userOrderHistorySchema } = require("./userOrderHistorySchema");
const { OrderHistorySchema } = require("./OrderHistorySchema");
module.exports = {
  userSchema,
  lunchMenuSchema,
  dishSchema,
  userOrderHistorySchema,
  OrderHistorySchema,
};
