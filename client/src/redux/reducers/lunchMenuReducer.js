import {
  CLEAR_DATA,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADING,
} from "../actionTypes";

const initialStore = {
  loading: true,
  lunchMenu: [],
};
const lunchMenuReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_LUNCH_MENU:
      return { ...state, lunchMenu: action.payload };
    case SET_LUNCH_MENU_LOADING:
      return { ...state, loading: action.payload };
    case CLEAR_DATA:
      return { ...state, lunchMenu: initialStore.lunchMenu };
    default:
      return state;
  }
};
export default lunchMenuReducer;
