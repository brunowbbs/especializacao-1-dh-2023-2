import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import todoReducer from "./reducers/todo-reducer";
import combineSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ todoReducer: todoReducer });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(combineSagas); //combiner sagas

export default store;
