import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export let store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export let persistor = persistStore(store);
