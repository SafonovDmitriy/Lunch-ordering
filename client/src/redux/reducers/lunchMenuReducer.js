import {
  CLEAR_DATA,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADED,
  SET_SELECT_LUNCH_MENU,
  SET_DEADLINE_FOR_OREDERING,
  SET_IS_MENU_OPEN,
} from "../actionTypes";

const initialStore = {
  loaded: false,
  lunchMenu: [],
  selectMenu: null,
  deadlineForOrdering: null,
  isMenuOpen: false,
};
const lunchMenuReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LUNCH_MENU:
      return { ...state, lunchMenu: payload };
    case SET_LUNCH_MENU_LOADED:
      return { ...state, loaded: payload };
    case SET_SELECT_LUNCH_MENU:
      return { ...state, selectMenu: payload };
    case SET_DEADLINE_FOR_OREDERING:
      return { ...state, deadlineForOrdering: payload };
    case SET_IS_MENU_OPEN:
      return { ...state, isMenuOpen: payload };
    case CLEAR_DATA:
      return initialStore;
    default:
      return state;
  }
};
export default lunchMenuReducer;
