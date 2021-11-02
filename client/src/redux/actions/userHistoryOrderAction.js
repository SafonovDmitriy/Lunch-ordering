import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersHistoryApi } from "../../api/httpService";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import {
  GET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER,
  SET_USER_HISTORY_ORDER_LOADING,
  SET_USER_HISTORY_ORDER_TOTAL_PAGE,
} from "../actionTypes";

export const userHistorySagaWorker = [
  takeEvery(GET_USER_HISTORY_ORDER, getUserHistoryOrderSaga),
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
export const setUserHistoryOrderLoadingAction = (payload) => ({
  type: SET_USER_HISTORY_ORDER_LOADING,
  payload,
});

function* getUserHistoryOrderSaga({ payload }) {
  try {
    yield put(setUserHistoryOrderLoadingAction(true));
    const {
      data: { userHistory, total },
    } = yield call(getUsersHistoryApi, { limit: 2, page: payload });
    yield put(setUserHistoryOrderAction(userHistory));
    yield put(setUserHistoryOrderTotalPageAction(total));
  } catch (error) {
    showErrorMessage(error);
  } finally {
    yield put(setUserHistoryOrderLoadingAction(false));
  }
}
