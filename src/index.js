import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  // eslint-disable-next-line
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
