import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePosts, fetchPost } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store.todo);

  function addTodo() {
    // const todo = {
    //   id: 1,
    //   title: "NOVO TODO",
    //   description: "DESCRICAO DO NOVO TODO",
    // };

    dispatch(fetchPost({ id: 1 }));

    // dispatch(
    //   addTodoAction({
    //     todo,
    //   })
    // );
  }

  function addMultiplesTodos() {
    dispatch(fetchMultiplePosts({ name: "Wesley", page: 2 }));
  }

  return (
    <>
      <button onClick={addTodo}>Adicionar todo</button>
      <button onClick={addMultiplesTodos}>Adicionar varios todos</button>
      {todos.length < 1 ? (
        <h3>Nenhum item cadastrado</h3>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
