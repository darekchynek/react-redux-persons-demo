import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { getStore } from "./Store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
