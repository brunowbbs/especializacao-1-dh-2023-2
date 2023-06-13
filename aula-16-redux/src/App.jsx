import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header";

function App() {
  const [valor, setValor] = useState("");
  const [nome, setNome] = useState("");

  const dispatch = useDispatch();

  const { numero, name } = useSelector((state) => state.counter);
  const { numbers } = useSelector((state) => state.list);

  return (
    <>
      <Header />
      <h1>{numero}</h1>
      <h3>{numbers}</h3>

      <p>{name}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENTAR
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        DECREMENTAR
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>

      <input type="number" onChange={(e) => setValor(e.target.value)} />

      <input onChange={(e) => setNome(e.target.value)} />

      <button
        onClick={() =>
          dispatch({
            type: "SET_USER_NUMBER",
            payload: {
              numero: Number(valor),
            },
          })
        }
      >
        ADD NUMBER
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "SET_USER_NAME",
            payload: {
              nome: nome,
            },
          })
        }
      >
        SET NOME
      </button>
    </>
  );
}

export default App;
