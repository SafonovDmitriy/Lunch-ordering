import {
  CLEAR_DATA,
  SET_USERS,
  SET_USERS_TOTAL_PAGE,
  USERS_LOADED,
} from "../actionTypes";

const initialStore = {
  users: {
    data: [],
    loaded: false,
    totalPage: null,
  },
};
const adminReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return { ...state, users: { ...state.users, data: payload } };
    case SET_USERS_TOTAL_PAGE:
      return { ...state, users: { ...state.users, totalPage: payload } };
    case USERS_LOADED:
      return { ...state, users: { ...state.users, loaded: payload } };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default adminReducer;
