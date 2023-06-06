import { useState } from "react";
import CardFruit from "./components/card-fruit";
import { frutas } from "./data";

export default function List() {
  const [fruta, setFruta] = useState("");

  return (
    <div>
      <h1>Minha Lista de Frutas</h1>
      {frutas.map((_) => (
        <>
          <input type="text" onChange={(e) => setFruta(e.target.value)} />
          <CardFruit fruit={fruta} />
        </>
      ))}
    </div>
  );
}
