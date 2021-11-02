import { all } from "redux-saga/effects";
import { authSagaWorker } from "./authAction";
import { lunchmenuSagaWorker } from "./lunchMenuAction";
import { userSagaWorker } from "./userAction";
import { userHistorySagaWorker } from "./userHistoryOrderAction";
import { dishesSagaWorker } from "./dishesAction";
import { adminSagaWorker } from "./adminAction";

export function* rootSagaWatcher() {
  yield all([
    ...userSagaWorker,
    ...authSagaWorker,
    ...lunchmenuSagaWorker,
    ...userHistorySagaWorker,
    ...dishesSagaWorker,
    ...adminSagaWorker,
  ]);
}
