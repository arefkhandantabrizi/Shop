import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";
import logger from "./store/middleware/logger";
import error from "./store/middleware/error";
import api from "./store/middleware/api";
import { loadState, saveState } from "./store/localStorage";

import "./css/style.css";
import App from "./App";

const rootElement = document.getElementById("root");

const persistedState = loadState();
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger, error, api],
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
serviceWorker.unregister();
