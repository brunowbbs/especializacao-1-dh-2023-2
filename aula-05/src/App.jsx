import { useState } from "react";
import useTodo from "./hooks/useTodo";

export default function App() {
  const { addTodo, error, isFetching, todos } = useTodo();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados </h3>;
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
        <button onClick={() => addTodo({ title, date })}>Salvar</button>
      </div>
      <div>
        <h1>Hello App</h1>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{JSON.stringify(todo)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
