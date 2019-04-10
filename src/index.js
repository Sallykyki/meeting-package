import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
