import { NotificationManager } from "react-notifications";
import { call, takeEvery } from "redux-saga/effects";
import {
  authorizationApi,
  registrationApi,
  verifyApi,
} from "../../api/httpService";
import {
  AUTHORIZATION_TYPE_ACTION,
  REGISTRATION_TYPE_ACTION,
  VERIFICATION_TYPE_ACTION,
} from "../actionTypes";
import { history } from "../../";
import { NAVIGATION_MAP } from "../../constants";
export const authSagaWorker = [
  takeEvery(AUTHORIZATION_TYPE_ACTION, authorizationSaga),
  takeEvery(REGISTRATION_TYPE_ACTION, registrationSaga),
  takeEvery(VERIFICATION_TYPE_ACTION, verifySaga),
];

export const authorizationAction = (payload) => ({
  type: AUTHORIZATION_TYPE_ACTION,
  payload,
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

const showSuccessMessage = (message) => {
  NotificationManager.success(message);
};
const showErrorMessage = ({ response }) => {
  NotificationManager.error(response?.data?.message);
};
