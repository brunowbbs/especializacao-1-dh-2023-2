const inicialState = {
  todo: [
    {
      _id: 1,
      title: "Acordar",
      category: "Pessoal",
      date: "12/06/2023",
      description: "Loren ipsum facto",
      status: true,
    },
  ],
};

export function todoReducer(state = inicialState, action) {
  switch (action.type) {
    case "GETALL": {
      return {
        ...state,
        todo: action.payload
      };
    }
    default: return state;
  }

}
