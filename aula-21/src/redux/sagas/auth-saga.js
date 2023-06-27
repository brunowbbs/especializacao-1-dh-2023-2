import axios from "axios";
import { call, all, takeLatest, put } from "redux-saga/effects";

async function auth() {
  return (await axios.post("https://api-todo-six.vercel.app/auth")).data;
}

function* authSaga() {
  try {
    const response = yield call(auth);

    yield put({ type: "ALL_TODOS", payload: response });
  } catch (error) {
    alert(error);
  }
}

export default all([takeLatest("AUTH", authSaga)]);

//arquitetura flux
