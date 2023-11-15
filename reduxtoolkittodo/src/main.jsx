import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react";
import { Store } from "redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider Store={Store}>
    <App />
  </Provider>
);
