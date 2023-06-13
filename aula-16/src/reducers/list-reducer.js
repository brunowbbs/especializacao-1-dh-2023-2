const STATE = {
  numbers: [10, 20, 30],
};

export default function ListReducer(state = STATE, action) {
  console.log("LIST REDUCER");

  if (action.type === "ADD_NUMBER") {
    const stateCopy = { ...state };

    stateCopy.numbers.push(10);

    return {
      ...stateCopy,
    };
  }

  if (action.type === "REMOVER_NUMBER") {
    const stateCopy = { ...state };

    const arrayFiltrado = stateCopy.numbers.filter(
      (item) => item !== action.payload.valor
    );

    return {
      ...state,
      numbers: arrayFiltrado,
    };
  }

  return state;
}
