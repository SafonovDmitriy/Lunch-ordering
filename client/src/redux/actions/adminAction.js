import { call, takeLatest, put } from "redux-saga/effects";
import { getAllUsersApi, updateUserBalanceApi } from "../../api/httpService";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import {
  FETCH_ALL_USERS,
  SET_USERS,
  SET_USERS_TOTAL_PAGE,
  UPDATE_BALANCE_USER,
} from "../actionTypes";

export const adminSagaWorker = [
  takeLatest(FETCH_ALL_USERS, fetchAllUsersSaga),
  takeLatest(UPDATE_BALANCE_USER, updateUserBalanceSaga),
];

export const getAllUsersAction = (payload) => ({
  type: FETCH_ALL_USERS,
  payload,
});
export const setUsersAction = (payload) => ({
  type: SET_USERS,
  payload,
});
export const setUsersTotalPageAction = (payload) => ({
  type: SET_USERS_TOTAL_PAGE,
  payload,
});
export const updateBalanceUserAction = (payload) => ({
  type: UPDATE_BALANCE_USER,
  payload,
});

function* fetchAllUsersSaga({ payload }) {
  try {
    const {
      data: { total, users },
    } = yield call(getAllUsersApi, { limit: 2, page: payload });

    yield put(setUsersAction(users));
    yield put(setUsersTotalPageAction(total));
  } catch (error) {
    showErrorMessage(error);
  }
}
function* updateUserBalanceSaga({
  payload: { numberPage, balance, selectUserId },
}) {
  try {
    yield call(updateUserBalanceApi, { balance, selectUserId });
    yield put(getAllUsersAction(numberPage));
  } catch (error) {
    showErrorMessage(error);
  }
}
