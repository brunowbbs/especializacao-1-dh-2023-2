import { Action, State } from "./types";

const INITIAL_STATE: State = {
  alunos: [],
  favoritos: [],
  loading: true,
};

export default function alunoReducer(state = INITIAL_STATE, action: Action) {
  if (action.type === "GET_ALUNOS") {
    return { ...state, alunos: action.payload, loading: false };
  }

  if (action.type === "ADD_FAVORITO") {
    const findAluno = state.favoritos.find(
      (favorito) => favorito._id === action.payload._id
    );

    if (!findAluno) {
      return { ...state, favoritos: [...state.favoritos, action.payload] };
    }
  }

  if (action.type === "REMOVE_FAVORITO") {
    const alunosFiltrados = state.favoritos.filter(
      (favorito) => favorito._id !== action.payload._id
    );
    return { ...state, favoritos: alunosFiltrados };
  }

  return state;
}
