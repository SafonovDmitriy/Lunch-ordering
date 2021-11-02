import { CLEAR_DATA, SET_DISHES, SET_DISHES_LOADING } from "../actionTypes";

const initialStore = {
  loading: true,
  dishes: {},
};
const dishesReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DISHES:
      return { ...state, dishes: payload };
    case SET_DISHES_LOADING:
      return { ...state, loading: payload };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default dishesReducer;
