import React from "react";
import ReactDOM from "react-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./App";
import history from "./history";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ReactNotification />
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
