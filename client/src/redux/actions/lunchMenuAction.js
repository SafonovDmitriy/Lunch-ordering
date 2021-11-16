import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  fetchLunchMenuApi,
  getSelectLunchMenuApi,
  menuFormedTodayApi,
  selectLunchMenuApi,
} from "../../api/httpService";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../helpers/showNotificationMessage";
import {
  FETCH_LUNCH_MENU,
  GET_SELECT_LUNCH_MENU,
  MENU_FORMED_TODAY,
  SELECT_LUNCH_MENU,
  SET_DEADLINE_FOR_OREDERING,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADED,
  SET_SELECT_LUNCH_MENU,
  SET_IS_MENU_OPEN,
} from "../actionTypes";
import { deadlineForOrderingSelector, isMenuOpenSelector } from "../selectors";
import { errorHandlerAction } from "./otherAction";
import { userDataFetchAction } from "./userAction";

export const lunchmenuSagaWorker = [
  takeLatest(FETCH_LUNCH_MENU, fetchLunchMenuSaga),
  takeLatest(SELECT_LUNCH_MENU, selectLunchMenuSaga),
  takeLatest(GET_SELECT_LUNCH_MENU, getSelectLunchMenuSaga),
  takeLatest(MENU_FORMED_TODAY, menuFormedTodaySaga),
];

export const lunchMenuFetchAction = () => ({
  type: FETCH_LUNCH_MENU,
});
export const setLunchMenuAction = (payload) => ({
  type: SET_LUNCH_MENU,
  payload,
});
export const setDeadlineForOrderingAction = (payload) => ({
  type: SET_DEADLINE_FOR_OREDERING,
  payload,
});
export const setLunchMenuLoadedAction = (payload) => ({
  type: SET_LUNCH_MENU_LOADED,
  payload,
});
export const selectLunchMenuAction = (payload) => ({
  type: SELECT_LUNCH_MENU,
  payload,
});
export const getSelectLunchMenuAction = () => ({
  type: GET_SELECT_LUNCH_MENU,
});
export const setSelectLunchMenuAction = (payload) => ({
  type: SET_SELECT_LUNCH_MENU,
  payload,
});
export const setIsMenuOpenAction = (payload) => ({
  type: SET_IS_MENU_OPEN,
  payload,
});
export const menuFormedTodayAction = () => ({
  type: MENU_FORMED_TODAY,
});
function* fetchLunchMenuSaga() {
  try {
    const {
      lunchMenu: { lunchMenu: lunchMenuList },
    } = yield select();
    const JSON_PREV_LUNCH_MENU_LIST = JSON.stringify(lunchMenuList);
    const {
      data: { message, lunchMenu },
    } = yield call(fetchLunchMenuApi);
    const JSON_LUNCH_MENU_LIST = JSON.stringify(lunchMenu);
    if (JSON_PREV_LUNCH_MENU_LIST !== JSON_LUNCH_MENU_LIST) {
      yield put(setLunchMenuAction(lunchMenu));
      showSuccessMessage(message);
    }
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  } finally {
    yield put(setLunchMenuLoadedAction(true));
  }
}

function* selectLunchMenuSaga({ payload }) {
  try {
    const {
      data: { message },
    } = yield call(selectLunchMenuApi, { idLunchMenu: payload });
    yield put(getSelectLunchMenuAction());
    yield put(userDataFetchAction());
    showSuccessMessage(message);
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  }
}
function* getSelectLunchMenuSaga() {
  try {
    const {
      data: { selectLunchMenuId },
    } = yield call(getSelectLunchMenuApi);
    yield put(setSelectLunchMenuAction(selectLunchMenuId));
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  }
}
function* menuFormedTodaySaga() {
  try {
    const deadlineForOrdering = yield select(deadlineForOrderingSelector);
    const _isMenuOpen = yield select(isMenuOpenSelector);
    const {
      data: { deadlineTime, isMenuOpen, message },
    } = yield call(menuFormedTodayApi);
    if (deadlineForOrdering !== deadlineTime) {
      yield !!deadlineTime && put(setDeadlineForOrderingAction(deadlineTime));
    }
    yield !!isMenuOpen && !_isMenuOpen && put(setIsMenuOpenAction(isMenuOpen));
    yield showSuccessMessage(message);
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
  }
}
