import { all } from "redux-saga/effects";
import getAluno from "./aluno-saga";

export default function* combineSagas(): Generator {
  return yield all([getAluno]);
}
