import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext({});

// eslint-disable-next-line react/prop-types
const MyProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const response = localStorage.getItem("@user_email");

    if (response) {
      setUserEmail(response);
    }
  }, []);

  function logout() {
    navigate("/login");
    localStorage.clear();
  }

  function changeUserEmail(email) {
    setUserEmail(email);
    localStorage.setItem("@user_email", email);
  }

  const nome = "Wesley Bruno Barbosa";
  const cidade = "Porteirinha";

  return (
    <MyContext.Provider
      value={{ nome, cidade, userEmail, logout, changeUserEmail }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

/* 
  1. Criar o contexto
  2. Criar o Provider
  3. Envolver a aplicação no provider 
*/
