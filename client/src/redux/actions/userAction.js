import { call, put, takeLatest, select } from "redux-saga/effects";
import { fetchUserApi } from "../../api/httpService";
import { FETCH_USER, SET_USER_DATA, SET_USER_LOADING } from "../actionTypes";
import { isUserIsEmptySelector } from "../selectors";
import { errorHandlerAction } from "./otherAction";

export const userSagaWorker = [takeLatest(FETCH_USER, fetchUserSaga)];

export const userDataFetchAction = () => ({
  type: FETCH_USER,
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
  const isEmptyUser = yield select(isUserIsEmptySelector);
  yield isEmptyUser && put(setUserLoadingAction(true));
  try {
    const { data } = yield call(fetchUserApi);
    yield put(setUserDataAction(data.user));
  } catch ({ response: { status } }) {
    yield put(errorHandlerAction(status));
  } finally {
    yield isEmptyUser && put(setUserLoadingAction(false));
  }
}
