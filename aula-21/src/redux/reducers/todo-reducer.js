const INITIAL_VALUES = {
  todos: [],
};

export default function todoReducer(state = INITIAL_VALUES, action) {
  if (action.type === "ALL_TODOS") {
    return { ...state, todos: action.payload };
  }

  return state;
}
