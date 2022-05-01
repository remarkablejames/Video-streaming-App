import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
