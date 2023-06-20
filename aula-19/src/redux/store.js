import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { todoReducer } from "./reducers";

import thunk from "redux-thunk";

const reducers = combineReducers({ todo: todoReducer });

export const store = legacy_createStore(reducers, applyMiddleware(thunk));
