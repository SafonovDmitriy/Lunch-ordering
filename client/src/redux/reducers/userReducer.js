import { CLEAR_DATA, SET_USER_DATA, SET_USER_LOADING } from "../actionTypes";

const initialStore = {
  loading: true,
  userData: {},
};
const userReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_DATA:
      return { ...state, userData: payload };
    case SET_USER_LOADING:
      return { ...state, loading: payload };
    case CLEAR_DATA:
      return { ...state, userData: initialStore.userData };
    default:
      return state;
  }
};
export default userReducer;
