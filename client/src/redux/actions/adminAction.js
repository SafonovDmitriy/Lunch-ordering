import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  getAllUsersApi,
  openMenuApi,
  placeAnOrderApi,
  saveNewTimeForOrderApi,
  updateUserBalanceApi,
} from "../../api/httpService";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../helpers/showNotificationMessage";
import {
  FETCH_ALL_USERS,
  OPEN_MENU,
  PLACE_AN_ORDER,
  SET_USERS,
  SET_USERS_TOTAL_PAGE,
  TIME_FOR_ORDER,
  UPDATE_BALANCE_USER,
  USERS_LOADED,
} from "../actionTypes";
import {
  deadlineForOrderingSelector,
  userIdSelector,
  usersSelector,
} from "../selectors";
import {
  setDeadlineForOrderingAction,
  setIsMenuOpenAction,
} from "./lunchMenuAction";
import { errorHandlerAction } from "./otherAction";
import { setUserDataAction } from "./userAction";

export const adminSagaWorker = [
  takeLatest(FETCH_ALL_USERS, fetchAllUsersSaga),
  takeLatest(UPDATE_BALANCE_USER, updateUserBalanceSaga),
  takeLatest(PLACE_AN_ORDER, placeAnOrderSaga),
  takeLatest(TIME_FOR_ORDER, saveNewTimeForOrderSaga),
  takeLatest(OPEN_MENU, openMenuSaga),
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
export const saveNewTimeForOrderAction = (payload) => ({
  type: TIME_FOR_ORDER,
  payload,
});
export const openMenuAction = () => ({
  type: OPEN_MENU,
});

function* fetchAllUsersSaga({ payload }) {
  try {
    const {
      data: { totalPage, users },
    } = yield call(getAllUsersApi, { limit: 10, page: payload });

    yield put(setUsersAction(users));
    yield put(setUsersTotalPageAction(totalPage));
  } catch ({ data, status }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  } finally {
    yield put(setUsersLoadedAction(true));
  }
}
function* updateUserBalanceSaga({ payload: { balance, selectUserId } }) {
  try {
    yield call(updateUserBalanceApi, { balance, selectUserId });
    const userId = yield select(userIdSelector);
    const users = yield select(usersSelector);
    const newUsers = users.map((user) =>
      user._id === selectUserId ? { ...user, balance: Number(balance) } : user
    );
    yield put(setUsersAction(newUsers));
    if (userId === selectUserId) yield put(setUserDataAction({ balance }));
  } catch ({ data, status }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  }
}
function* placeAnOrderSaga() {
  try {
    const {
      data: { message },
    } = yield call(placeAnOrderApi);
    showSuccessMessage(message, 0);
  } catch ({ data, status }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  }
}
function* saveNewTimeForOrderSaga({ payload }) {
  try {
    const deadlineTime = yield select(deadlineForOrderingSelector);
    if (deadlineTime !== payload.deadlineTime) {
      const { data } = yield call(saveNewTimeForOrderApi, payload);
      yield put(setDeadlineForOrderingAction(payload.deadlineTime));
      showSuccessMessage(data.message, 4000);
    }
  } catch ({ data, status }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  }
}
function* openMenuSaga() {
  try {
    const { data } = yield call(openMenuApi);
    yield put(setIsMenuOpenAction(true));
    showSuccessMessage(data.message, 4000);
  } catch ({ data, status }) {
    yield put(errorHandlerAction(status));
    showErrorMessage(data?.message);
  }
}
