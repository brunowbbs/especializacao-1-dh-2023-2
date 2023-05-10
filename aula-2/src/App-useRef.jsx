// useRef

import { useRef } from "react";

// import { useState } from "react";

//Virtual DOM

export default function App() {
  /*   const [valor, setValor] = useState(""); */

  const inputRef = useRef(null);
  const divRef = useRef(null);

  function handleCheck() {
    //const inputValue = document.getElementById("input").value;
    const inputValue = inputRef.current.value;
    // alert(inputValue);

    if (inputValue < 0) {
      divRef.current.style.backgroundColor = "#f05656";
    } else {
      divRef.current.style.backgroundColor = "#4846e2";
    }
  }

  return (
    <div ref={divRef}>
      <h1>Hello World</h1>

      {/* <h2>{valor}</h2> */}

      <input
        ref={inputRef}
        // id="input"
        // value={valor}
        // onChange={(event) => setValor(event.target.value)}
        placeholder="Digite um valor"
      />

      <button onClick={handleCheck}>Verificar</button>
    </div>
  );
}
