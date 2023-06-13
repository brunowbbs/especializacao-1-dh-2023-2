const STATE = {
  numero: 100,
  name: "",
};

export default function CounterReducer(state = STATE, action) {
  console.log("COUNTER REDUCER");

  if (action.type === "INCREMENT") {
    return {
      ...state,
      numero: state.numero + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      numero: state.numero - 1,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      numero: 100,
    };
  }

  if (action.type === "SET_USER_NUMBER") {
    return {
      ...state,
      numero: action.payload.numero,
    };
  }

  if (action.type === "SET_USER_NAME") {
    return {
      ...state,
      name: action.payload.nome,
    };
  }

  return state;
}
