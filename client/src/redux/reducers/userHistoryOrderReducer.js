import {
  CLEAR_DATA,
  SET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER_LOADED,
  SET_USER_HISTORY_ORDER_TOTAL_PAGE,
} from "../actionTypes";

const initialStore = {
  loaded: false,
  userHistory: [],
  totalPage: null,
};
const userHistoryOrderReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_HISTORY_ORDER:
      return { ...state, userHistory: payload };
    case SET_USER_HISTORY_ORDER_LOADED:
      return { ...state, loaded: payload };
    case SET_USER_HISTORY_ORDER_TOTAL_PAGE:
      return { ...state, totalPage: payload };

    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default userHistoryOrderReducer;
