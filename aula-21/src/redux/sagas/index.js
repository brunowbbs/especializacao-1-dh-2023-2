import { all } from "redux-saga/effects";
import todoSaga from "./todo-saga";
import authSaga from "./auth-saga";

export default function* combineSagas() {
  return yield all([todoSaga, authSaga]);
}
