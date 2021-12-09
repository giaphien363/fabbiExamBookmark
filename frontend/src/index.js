import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


require("dotenv").config();

const startApp = () => {
  render(
    <React.StrictMode>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
startApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
