import { takeLatest, select, put } from "@redux-saga/core/effects";
import { NAVIGATION_MAP, STATUS_ERRORS } from "../../constants";
import { showErrorMessage } from "../../helpers/showNotificationMessage";
import history from "../../history";
import { CLEAR_DATA, ERROR_HANDLER } from "../actionTypes";
import { isUserIsEmptySelector } from "../selectors";

export const otherSagaWorker = [takeLatest(ERROR_HANDLER, errorHandlerSaga)];

export const dataClearAction = () => ({
  type: CLEAR_DATA,
});
export const errorHandlerAction = (errorStatus) => ({
  type: ERROR_HANDLER,
  errorStatus,
});

function* errorHandlerSaga({ errorStatus }) {
  const isUserEmpty = yield select(isUserIsEmptySelector);
  if (!isUserEmpty && errorStatus === STATUS_ERRORS.UNAUTHORIZED) {
    yield history.push(NAVIGATION_MAP.LOGIN_PAGE);
    showErrorMessage("Token expired", 0);
    yield put(dataClearAction());
  }
}
