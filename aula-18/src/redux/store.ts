import { Store, combineReducers, createStore } from "redux";

import CounterReducer from "./reducers/counter-reducer";

const reducers = combineReducers({
  counter: CounterReducer,
});

export type RootState = {
  counter: {
    numero: number;
  };
};

export const store: Store<RootState> = createStore(reducers);
