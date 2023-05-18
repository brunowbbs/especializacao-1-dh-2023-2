import { useState } from "react";

import useTodo from "./hooks/useTodo";
import formatDate from "./utils/date";

export default function App() {
  const { addTodo, error, isFetching, todos, editTodo, deleteTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [id, setId] = useState(null);

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados </h3>;
  }

  function fillStates(todo) {
    setId(todo._id);
    setTitle(todo.title);

    // const test = todo.date.substring(0, 10);
    const dateFormated = todo.date.split("T")[0];
    setDate(dateFormated);
  }

  function clearState() {
    setDate("");
    setTitle("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={() => {
            if (id) {
              editTodo({ payload: { title, date }, id: id });
              setId(null);
            } else {
              addTodo({ title, date });
            }
            clearState();
          }}
        >
          Salvar
        </button>
      </div>
      <div>
        <h1>Hello App</h1>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>
              <h2>{todo.title}</h2>
              <h3>{formatDate(todo.date)}</h3>
              <button onClick={() => fillStates(todo)}>Editar</button>
              <button onClick={() => deleteTodo(todo._id)}>Apagar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
