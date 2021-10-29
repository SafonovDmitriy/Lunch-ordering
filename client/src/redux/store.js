import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSagaWatcher } from "./actions";
import lunchMenuReducer from "./reducers/lunchMenuReducer";
import userReducer from "./reducers/userReducer";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  user: userReducer,
  lunchMenu: lunchMenuReducer,
});

const store = createStore(
  reducers,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(saga)
    : composeWithDevTools(applyMiddleware(saga))
);
saga.run(rootSagaWatcher);
export default store;
