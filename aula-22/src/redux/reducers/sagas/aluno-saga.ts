import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

type Aluno = {
  _id: string;
  nome: string;
  matricula: string;
  curso: string;
  bimestre: string;
};

type ResponseGenerator = {
  config?: unknown;
  data?: Aluno[];
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
};

async function getAlunos() {
  return await axios.get("https://api-aluno.vercel.app/aluno");
}

function* getAlunosSaga() {
  try {
    const response: ResponseGenerator = yield call(getAlunos);
    yield put({ type: "GET_ALUNOS", payload: response.data });
  } catch (error) {
    console.log("Erro ao buscar alunos");
  }
}

export default all([takeLatest("GET_ALUNOS_SAGA", getAlunosSaga)]);
