import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  fetchLunchMenuApi,
  getSelectLunchMenuApi,
  selectLunchMenuApi,
} from "../../api/httpService";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../helpers/showNotificationMessage";
import {
  FETCH_LUNCH_MENU,
  SELECT_LUNCH_MENU,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADED,
  GET_SELECT_LUNCH_MENU,
  SET_SELECT_LUNCH_MENU,
} from "../actionTypes";
import { errorHandlerAction } from "./otherAction";

export const lunchmenuSagaWorker = [
  takeLatest(FETCH_LUNCH_MENU, fetchLunchMenuSaga),
  takeLatest(SELECT_LUNCH_MENU, selectLunchMenuSaga),
  takeLatest(GET_SELECT_LUNCH_MENU, getSelectLunchMenuSaga),
];

export const lunchMenuFetchAction = () => ({
  type: FETCH_LUNCH_MENU,
});
export const setLunchMenuAction = (payload) => ({
  type: SET_LUNCH_MENU,
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

function* fetchLunchMenuSaga() {
  try {
    const {
      lunchMenu: { lunchMenu: lunchMenuList },
    } = yield select();
    const JSON_PREV_LUNCH_MENU_LIST = JSON.stringify(lunchMenuList);
    const { data } = yield call(fetchLunchMenuApi);
    const { message, lunchMenu } = data;
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
