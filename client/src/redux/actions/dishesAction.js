import { call, put, takeLatest } from "redux-saga/effects";
import { getDishesApi, updateLunchMenuApi } from "../../api/httpService";
import {
  FETCH_DISHES,
  SET_DISHES,
  SET_DISHES_LOADED,
  UPDATE_DISH,
} from "../actionTypes";
import { errorHandlerAction } from "./otherAction";

export const dishesSagaWorker = [
  takeLatest(FETCH_DISHES, fetchDishesSaga),
  takeLatest(UPDATE_DISH, updateDishSaga),
];

export const dishesFetchAction = () => ({
  type: FETCH_DISHES,
});
export const updateDishAction = (payload) => ({
  type: UPDATE_DISH,
  payload,
});
export const setDishesAction = (payload) => ({
  type: SET_DISHES,
  payload,
});
export const setDishesLoadedAction = (payload) => ({
  type: SET_DISHES_LOADED,
  payload,
});

function* fetchDishesSaga() {
  try {
    const {
      data: { dishes },
    } = yield call(getDishesApi);
    yield put(setDishesAction(dishes));
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
  } finally {
    yield put(setDishesLoadedAction(true));
  }
}
function* updateDishSaga({ payload }) {
  try {
    yield call(updateLunchMenuApi, payload);
  } catch ({ response }) {
    yield put(errorHandlerAction(response?.status));
  }
}
