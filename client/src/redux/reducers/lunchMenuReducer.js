import {
  CLEAR_DATA,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADING,
  SET_SELECT_LUNCH_MENU,
} from "../actionTypes";

const initialStore = {
  loading: true,
  lunchMenu: [],
  selectMenu: null,
};
const lunchMenuReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LUNCH_MENU:
      return { ...state, lunchMenu: payload };
    case SET_LUNCH_MENU_LOADING:
      return { ...state, loading: payload };
    case SET_SELECT_LUNCH_MENU:
      return { ...state, selectMenu: payload };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default lunchMenuReducer;
