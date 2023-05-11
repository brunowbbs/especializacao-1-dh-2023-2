import { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

export default function Home() {
  const { nome, cidade } = useContext(MyContext);

  return (
    <div>
      <h1>
        Hello World - Home {nome} - {cidade}
      </h1>
    </div>
  );
}
