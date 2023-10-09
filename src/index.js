import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./components/stateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
     <App /> 
    </StateProvider>
  </React.StrictMode>
);


//requestGithubUser('0z-cryptik', personalGitHubToken)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
module.hot && module.hot.accept();

//cd C:\Users\ENITAN\Desktop\react4\react-tailwind
