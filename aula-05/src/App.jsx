import { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { addTodo, getTodos } from "./requests/todos";

export default function App() {
  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   getApiTodos();
  // }, []);

  // async function getApiTodos() {
  //   try {
  //     setLoading(true);
  //     const { data } = await getTodos();
  //     setTodos(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

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
        <button onClick={() => mutate({ title, date })}>Salvar</button>
      </div>
      <div>
        <h1>Hello App</h1>
        <ul>
          {data.map((todo, idx) => (
            <li key={idx}>{JSON.stringify(todo)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
