import axios from "axios";
import { ADD_MULTIPLE_TODO, ADD_TODO } from "../action-types";

export function addTodoAction(payload) {
  return {
    type: ADD_TODO,
    payload: payload,
  };
}

const addMultiplesTodosAction = (payload) => ({
  type: ADD_MULTIPLE_TODO,
  payload,
});

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log(response.data);

    dispatch(addTodoAction(response.data));
  };
};

export const fetchMultiplePosts = ({ name, page }) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?page=${page}&name=${name}`
    );

    dispatch(addMultiplesTodosAction(response.data));
  };
};
