import { SET_USER_DATA, SET_USER_LOADING } from "../actionTypes";

const initialStore = {
  loading: true,
  userData: {},
};
const userReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    case SET_USER_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
export default userReducer;
