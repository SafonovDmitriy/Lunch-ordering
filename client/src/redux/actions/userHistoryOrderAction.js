import { call, put, takeLatest } from "redux-saga/effects";
import { getUsersHistoryApi } from "../../api/httpService";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import {
  GET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER_TOTAL_PAGE,
  SET_USER_HISTORY_ORDER_LOADED,
} from "../actionTypes";

export const userHistorySagaWorker = [
  takeLatest(GET_USER_HISTORY_ORDER, getUserHistoryOrderSaga),
];
export const getUserHistoryOrderAction = (payload) => ({
  type: GET_USER_HISTORY_ORDER,
  payload,
});
export const setUserHistoryOrderAction = (payload) => ({
  type: SET_USER_HISTORY_ORDER,
  payload,
});
export const setUserHistoryOrderTotalPageAction = (payload) => ({
  type: SET_USER_HISTORY_ORDER_TOTAL_PAGE,
  payload,
});

export const setUserHistoryOrderLoadedAction = (payload) => ({
  type: SET_USER_HISTORY_ORDER_LOADED,
  payload,
});

function* getUserHistoryOrderSaga({ payload }) {
  try {
    yield put(setUserHistoryOrderLoadedAction(false));
    const {
      data: { userHistory, total },
    } = yield call(getUsersHistoryApi, { limit: 2, page: payload });
    yield put(setUserHistoryOrderAction(userHistory));
    yield put(setUserHistoryOrderTotalPageAction(total));
  } catch ({
    response: {
      data: { message },
    },
  }) {
    showErrorMessage(message);
  } finally {
    yield put(setUserHistoryOrderLoadedAction(true));
  }
}
