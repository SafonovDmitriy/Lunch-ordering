import { NotificationManager } from "react-notifications";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  authorizationApi,
  logoutApi,
  registrationApi,
  verifyApi,
} from "../../api/httpService";
import { NAVIGATION_MAP } from "../../constants";
import history from "../../history";
import {
  AUTHORIZATION_TYPE_ACTION,
  REGISTRATION_TYPE_ACTION,
  VERIFICATION_TYPE_ACTION,
  LOGOUT_TYPE_ACTION,
} from "../actionTypes";
import { dataClearAction, userDataFetchAction } from "./userAction";
export const authSagaWorker = [
  takeEvery(AUTHORIZATION_TYPE_ACTION, authorizationSaga),
  takeEvery(REGISTRATION_TYPE_ACTION, registrationSaga),
  takeEvery(VERIFICATION_TYPE_ACTION, verifySaga),
  takeEvery(LOGOUT_TYPE_ACTION, logoutSaga),
];

export const authorizationAction = (payload) => ({
  type: AUTHORIZATION_TYPE_ACTION,
  payload,
});
export const logOutAction = () => ({
  type: LOGOUT_TYPE_ACTION,
});
export const registrationAction = (payload) => ({
  type: REGISTRATION_TYPE_ACTION,
  payload,
});
export const verifyAction = (payload) => ({
  type: VERIFICATION_TYPE_ACTION,
  payload,
});

function* authorizationSaga({ payload }) {
  try {
    const { data } = yield call(authorizationApi, payload);
    history.push(NAVIGATION_MAP.HOME_PAGE);
    yield put(userDataFetchAction());
    showSuccessMessage(data.message);
  } catch (error) {
    showErrorMessage(error);
  }
}
function* verifySaga({ payload }) {
  try {
    const { data } = yield call(verifyApi, payload);
    history.push(NAVIGATION_MAP.HOME_PAGE);
    showSuccessMessage(data.message);
  } catch (error) {
    showErrorMessage(error);
  }
}
function* registrationSaga({ payload }) {
  try {
    const { data } = yield call(registrationApi, {
      email: payload.email,
      password: payload.password,
    });
    showSuccessMessage(data.message);
  } catch (error) {
    showErrorMessage(error);
  }
}
function* logoutSaga() {
  try {
    yield call(logoutApi);
    yield put(dataClearAction());
    showSuccessMessage("Return to us quickly");
  } catch (error) {
    showErrorMessage("Something went wrong");
  }
}

const showSuccessMessage = (message) => {
  NotificationManager.success(message);
};
const showErrorMessage = ({ response }) => {
  NotificationManager.error(response?.data?.message);
};
