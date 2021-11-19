import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  canselSelectMenuApi,
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
  CANSEL_SELECT_MENU,
  FETCH_LUNCH_MENU,
  GET_SELECT_LUNCH_MENU,
  MENU_FORMED_TODAY,
  SELECT_LUNCH_MENU,
  SET_DEADLINE_FOR_OREDERING,
  SET_IS_MENU_OPEN,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADED,
  SET_SELECT_LUNCH_MENU,
  SET_SELECT_LUNCH_MENU_LOADING,
} from "../actionTypes";
import {
  deadlineForOrderingSelector,
  isMenuOpenSelector,
  lunchMenuSelector,
} from "../selectors";
import { errorHandlerAction } from "./otherAction";
import { setUserDataAction } from "./userAction";

export const lunchmenuSagaWorker = [
  takeLatest(FETCH_LUNCH_MENU, fetchLunchMenuSaga),
  takeLatest(SELECT_LUNCH_MENU, selectLunchMenuSaga),
  takeLatest(GET_SELECT_LUNCH_MENU, getSelectLunchMenuSaga),
  takeLatest(MENU_FORMED_TODAY, menuFormedTodaySaga),
  takeLatest(CANSEL_SELECT_MENU, canselSelectMenuSaga),
];

export const lunchMenuFetchAction = () => ({
  type: FETCH_LUNCH_MENU,
});
export const canselSelectMenuAction = () => ({
  type: CANSEL_SELECT_MENU,
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
export const selectLunchMenuLoadingAction = (payload) => ({
  type: SET_SELECT_LUNCH_MENU_LOADING,
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
    const lunchMenuList = yield select(lunchMenuSelector);
    const jsonPrevLunchMenuList = JSON.stringify(lunchMenuList);
    const {
      data: { message, lunchMenu },
    } = yield call(fetchLunchMenuApi);
    const jsonLunchMenuList = JSON.stringify(lunchMenu);
    if (jsonPrevLunchMenuList !== jsonLunchMenuList) {
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

function* selectLunchMenuSaga({ payload: idLunchMenu }) {
  try {
    yield put(selectLunchMenuLoadingAction(true));
    const {
      data: { message, newBalance },
    } = yield call(selectLunchMenuApi, { idLunchMenu });
    yield put(setUserDataAction({ balance: newBalance }));
    yield put(setSelectLunchMenuAction(idLunchMenu));
    showSuccessMessage(message);
  } catch ({ status, data }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message, 0);
  } finally {
    yield put(selectLunchMenuLoadingAction(false));
  }
}
function* getSelectLunchMenuSaga() {
  try {
    const {
      data: { selectLunchMenuId },
    } = yield call(getSelectLunchMenuApi);
    yield put(setSelectLunchMenuAction(selectLunchMenuId));
  } catch ({ status, data }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  }
}
function* menuFormedTodaySaga() {
  try {
    const deadlineForOrdering = yield select(deadlineForOrderingSelector);
    const _isMenuOpen = yield select(isMenuOpenSelector);
    const {
      data: { deadlineTime, isMenuOpen, message },
    } = yield call(menuFormedTodayApi);
    if (deadlineTime && deadlineForOrdering !== deadlineTime) {
      yield put(setDeadlineForOrderingAction(deadlineTime));
    }
    if (isMenuOpen && !_isMenuOpen) {
      yield put(setIsMenuOpenAction(isMenuOpen));
    }
    yield showSuccessMessage(message);
  } catch ({ status }) {
    yield put(errorHandlerAction(status));
  }
}
function* canselSelectMenuSaga() {
  try {
    const {
      data: { message, newBalance },
    } = yield call(canselSelectMenuApi);
    yield put(setUserDataAction({ balance: newBalance }));
    yield put(setSelectLunchMenuAction(null));
    yield showSuccessMessage(message);
  } catch ({ status }) {
    yield put(errorHandlerAction(status));
  }
}
