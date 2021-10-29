import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserApi } from "../../api/httpService";
import { NAVIGATION_MAP } from "../../constants";
import history from "../../history";

import {
  CLEAR_DATA,
  FETCH_USER,
  SET_USER_LOADING,
  SET_USER_DATA,
} from "../actionTypes";

export const userSagaWorker = [takeEvery(FETCH_USER, fetchUserSaga)];

export const userDataFetchAction = () => ({
  type: FETCH_USER,
});
export const dataClearAction = () => ({
  type: CLEAR_DATA,
});
export const setUserLoadingAction = (payload) => ({
  type: SET_USER_LOADING,
  payload,
});
export const setUserDataAction = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

function* fetchUserSaga() {
  yield put(setUserLoadingAction(true));
  try {
    const { data } = yield call(fetchUserApi);
    yield put(setUserDataAction(data.user));
  } catch (error) {
    history.push(NAVIGATION_MAP.LOGIN_PAGE);
  } finally {
    yield put(setUserLoadingAction(false));
  }
}
