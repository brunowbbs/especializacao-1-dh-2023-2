import { Action, State } from "./types";

const INITIAL_STATE: State = {
  alunos: [],
  loading: true,
};

export default function alunoReducer(state = INITIAL_STATE, action: Action) {
  if (action.type === "GET_ALUNOS") {
    saveAlunos(action.payload);
    return { ...state, alunos: action.payload, loading: false };
  }

  return state;
}

function saveAlunos(alunos: string) {
  localStorage.setItem("@Alunos", alunos);
}
