import { all } from "redux-saga/effects";
import { authSagaWorker } from "./authAction";
import { lunchmenuSagaWorker } from "./lunchMenuAction";
import { userSagaWorker } from "./userAction";

export function* rootSagaWatcher() {
  yield all([...userSagaWorker, ...authSagaWorker, ...lunchmenuSagaWorker]);
}
