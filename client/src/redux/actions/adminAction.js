import { call, takeLatest, put } from "redux-saga/effects";
import {
  getAllUsersApi,
  placeAnOrderApi,
  updateUserBalanceApi,
} from "../../api/httpService";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../helpers/showNotificationMessage";
import {
  FETCH_ALL_USERS,
  SET_USERS,
  SET_USERS_TOTAL_PAGE,
  UPDATE_BALANCE_USER,
  USERS_LOADED,
  PLACE_AN_ORDER,
} from "../actionTypes";
import { errorHandlerAction } from "./otherAction";
import { setUserDataAction } from "./userAction";

export const adminSagaWorker = [
  takeLatest(FETCH_ALL_USERS, fetchAllUsersSaga),
  takeLatest(UPDATE_BALANCE_USER, updateUserBalanceSaga),
  takeLatest(PLACE_AN_ORDER, placeAnOrderSaga),
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

export const setUsersLoadedAction = (payload) => ({
  type: USERS_LOADED,
  payload,
});
export const updateBalanceUserAction = (payload) => ({
  type: UPDATE_BALANCE_USER,
  payload,
});
export const placeAnOrderAction = () => ({
  type: PLACE_AN_ORDER,
});

function* fetchAllUsersSaga({ payload }) {
  try {
    const {
      data: { totalPage, users },
    } = yield call(getAllUsersApi, { limit: 10, page: payload });

    yield put(setUsersAction(users));
    yield put(setUsersTotalPageAction(totalPage));
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  } finally {
    yield put(setUsersLoadedAction(true));
  }
}
function* updateUserBalanceSaga({
  payload: { numberPage, balance, selectUserId },
}) {
  try {
    const {
      data: { mainUser },
    } = yield call(updateUserBalanceApi, { balance, selectUserId });
    yield put(getAllUsersAction(numberPage));
    if (mainUser) yield put(setUserDataAction(mainUser));
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  }
}
function* placeAnOrderSaga() {
  try {
    const {
      data: { message },
    } = yield call(placeAnOrderApi);
    showSuccessMessage(message);
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
    showErrorMessage(response?.data?.message);
  }
}
