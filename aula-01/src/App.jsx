//function

import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [numero, setNumero] = useState(10);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // alert("Executei");
    getAlgumaCoisa();
  }, []);

  async function getAlgumaCoisa() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    console.log(response);

    setTodos(response.data);
  }

  //let numero = 10;

  function increment() {
    //setNumero((previous) => previous + 1);
    setNumero(numero + 1);
  }

  return (
    <>
      <h1>{numero}</h1>
      {todos.map((todo) => (
        <span key={todo.id}>{JSON.stringify(todo)}</span>
      ))}
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

// classe
/* export default class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
 */
