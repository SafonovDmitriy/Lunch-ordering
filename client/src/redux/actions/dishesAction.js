import { call, put, takeLatest } from "redux-saga/effects";
import { getDishesApi, updateLunchMenuApi } from "../../api/httpService";
import {
  FETCH_DISHES,
  SET_DISHES,
  SET_DISHES_LOADING,
  UPDATE_DISH,
} from "../actionTypes";

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
export const setDishesLoadingAction = (payload) => ({
  type: SET_DISHES_LOADING,
  payload,
});

function* fetchDishesSaga() {
  yield put(setDishesLoadingAction(true));
  try {
    const {
      data: { dishes },
    } = yield call(getDishesApi);

    yield put(setDishesAction(dishes));
  } catch (error) {
  } finally {
    yield put(setDishesLoadingAction(false));
  }
}
function* updateDishSaga({ payload }) {
  try {
    const { data } = yield call(updateLunchMenuApi, payload);
    console.log(`data`, data);
  } catch (error) {}
}
