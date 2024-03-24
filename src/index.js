import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainCon } from "./mainCon";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./hooks/stateProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <MainCon />
      </Router>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
module.hot && module.hot.accept();
