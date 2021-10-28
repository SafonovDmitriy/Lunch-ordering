import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserApi } from "../../api/httpService";

import {
  CLEAR_DATA,
  FETCH_USER,
  SET_USER_LOADING,
  SET_USER_DATA,
} from "../actionTypes";

export const userSagaWorker = [takeEvery(FETCH_USER, fetchUserAction)];

export const userFetch = () => ({
  type: FETCH_USER,
});
export const dataClear = () => ({
  type: CLEAR_DATA,
});
export const setUserLoading = (payload) => ({
  type: SET_USER_LOADING,
  payload,
});
export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

function* fetchUserAction() {
  yield put(setUserLoading(true));
  try {
    const { data } = yield call(fetchUserApi);
    console.log(`data`, data);
    yield put(setUserData(data.user));
  } catch (error) {
  } finally {
    yield put(setUserLoading(false));
  }
}
