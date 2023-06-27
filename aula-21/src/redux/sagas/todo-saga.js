import axios from "axios";
import { call, all, takeLatest, put } from "redux-saga/effects";

async function getTodos() {
  return (await axios.get("https://api-todo-six.vercel.app/todo")).data;
}

async function addTodo(todo) {
  // console.log(todo);
  return (await axios.post("https://api-todo-six.vercel.app/todo", todo)).data;
}

function* getSagaTodo() {
  try {
    const response = yield call(getTodos);

    yield put({ type: "ALL_TODOS", payload: response });
  } catch (error) {
    alert(error);
  }
}

function* postSagaTodo(action) {
  try {
    // yield console.log(action);
    yield call(addTodo, action.payload);
    const response = yield call(getTodos);

    yield put({ type: "ALL_TODOS", payload: response });
    // yield put({ type: "ALL_TODOS", payload: response });
  } catch (error) {
    alert(error);
  }
}

export default all([
  takeLatest("GET_TODOS", getSagaTodo),
  takeLatest("ADD_TODO", postSagaTodo),
]);

//arquitetura flux
