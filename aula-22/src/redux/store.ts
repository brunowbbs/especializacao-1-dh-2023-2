import { applyMiddleware, combineReducers, createStore } from "redux";
import alunoReducer from "./reducers/aluno-reducer";
import createSagaMiddleware from "redux-saga";
import combineSagas from "./reducers/sagas";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ alunoReducer: alunoReducer });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(combineSagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
