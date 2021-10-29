import { takeEvery, call, put } from "redux-saga/effects";
import { fetchLunchMenuApi } from "../../api/httpService";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../../helpers/showNotificationMessage";
import {
  FETCH_LUNCH_MENU,
  SET_LUNCH_MENU,
  SET_LUNCH_MENU_LOADING,
} from "../actionTypes";

export const lunchmenuSagaWorker = [
  takeEvery(FETCH_LUNCH_MENU, fetchLunchMenuSaga),
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
