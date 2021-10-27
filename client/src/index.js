import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NotificationContainer />
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
