import { call, put, takeLatest } from "redux-saga/effects";
import { getUsersHistoryApi } from "../../api/httpService";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import {
  GET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER_TOTAL_PAGE,
  SET_USER_HISTORY_ORDER_LOADED,
} from "../actionTypes";
import { errorHandlerAction } from "./otherAction";

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
      data: { userHistory, totalPage },
    } = yield call(getUsersHistoryApi, { limit: 10, page: payload });
    yield put(setUserHistoryOrderAction(userHistory));
    yield put(setUserHistoryOrderTotalPageAction(totalPage));
  } catch ({ status, data }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  } finally {
    yield put(setUserHistoryOrderLoadedAction(true));
  }
}
