import { CLEAR_DATA, SET_DISHES, SET_DISHES_LOADED } from "../actionTypes";

const initialStore = {
  loaded: false,
  dishes: {},
};
const dishesReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DISHES:
      return { ...state, dishes: payload };
    case SET_DISHES_LOADED:
      return { ...state, loaded: payload };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default dishesReducer;
