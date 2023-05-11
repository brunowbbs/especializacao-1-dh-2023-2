import { useContext } from "react";
import { MyContext } from "../../../contexts/MyContext";

export default function Header() {
  const { userEmail, logout } = useContext(MyContext);

  return (
    <nav style={{ height: 80, width: "100%", background: "purple" }}>
      <center>
        <h1>Titulo do sistema - {userEmail}</h1>

        <button onClick={logout}>Deslogar</button>
      </center>
    </nav>
  );
}
