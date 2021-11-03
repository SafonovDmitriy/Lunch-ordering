import { takeLatest, call, put } from "redux-saga/effects";
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
  SET_LUNCH_MENU_LOADING,
  GET_SELECT_LUNCH_MENU,
  SET_SELECT_LUNCH_MENU,
} from "../actionTypes";

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
export const setLunchMenuLoadingAction = (payload) => ({
  type: SET_LUNCH_MENU_LOADING,
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
    yield put(setLunchMenuLoadingAction(true));
    const { data } = yield call(fetchLunchMenuApi);
    const { message, lunchMenu } = data;
    yield put(setLunchMenuAction(lunchMenu));

    showSuccessMessage(message);
  } catch (error) {
    showErrorMessage(error);
  } finally {
    yield put(setLunchMenuLoadingAction(false));
  }
}

function* selectLunchMenuSaga({ payload }) {
  try {
    const {
      data: { message },
    } = yield call(selectLunchMenuApi, { idLunchMenu: payload });
    yield put(getSelectLunchMenuAction());
    showSuccessMessage(message);
  } catch (error) {
    showErrorMessage(error);
  }
}
function* getSelectLunchMenuSaga() {
  try {
    const {
      data: { selectLunchMenuId },
    } = yield call(getSelectLunchMenuApi);
    yield put(setSelectLunchMenuAction(selectLunchMenuId));
  } catch (error) {
    showErrorMessage(error);
  }
}
