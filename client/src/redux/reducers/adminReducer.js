import { CLEAR_DATA, SET_USERS, SET_USERS_TOTAL_PAGE } from "../actionTypes";

const initialStore = {
  users: [],
  total: null,
};
const adminReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case SET_USERS_TOTAL_PAGE:
      return { ...state, total: payload };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default adminReducer;
