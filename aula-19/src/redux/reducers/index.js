import { ADD_MULTIPLE_TODO, ADD_TODO } from "../action-types";

const INITIAL_STATE = {
  todos: [],
};

export function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = { ...state };
      newState.todos.push(action.payload);

      return {
        ...newState,
      };
    }

    case ADD_MULTIPLE_TODO: {
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
