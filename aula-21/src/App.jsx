import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store.todoReducer);

  useEffect(() => {
    dispatch({ type: "GET_TODOS" });
  }, [dispatch]);

  function addTodo() {
    dispatch({
      type: "ADD_TODO",
      payload: {
        title: "Title de teste",
        description: "Description TEste",
        category: "Category teste",
        date: "2023/04/05",
      },
    });
  }

  return (
    <>
      <h1>Hello World</h1>
      {todos.map((todo, i) => (
        <p key={i}>{todo.description}</p>
      ))}
      <button onClick={addTodo}>Adicionar</button>
    </>
  );
}

export default App;
