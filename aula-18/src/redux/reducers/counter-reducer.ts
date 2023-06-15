import { Action } from "./types";

const INITIAL_STATE = {
  numero: 0,
};

export default function CounterReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        numero: state.numero + 1,
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        numero: state.numero - 1,
      };
    }

    case "SET_VALUE": {
      return {
        ...state,
        numero: action.payload?.numero,
      };
    }

    default: {
      return state;
    }
  }
}
