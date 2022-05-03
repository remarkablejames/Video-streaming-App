import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
