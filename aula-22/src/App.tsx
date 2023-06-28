import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { State } from "./redux/reducers/aluno-reducer/types";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { alunos, loading } = useSelector<RootState, State>(
    (store) => store.alunoReducer
  );

  useEffect(() => {
    dispatch({ type: "GET_ALUNOS_SAGA" });
  }, [dispatch]);

  function renderLoading() {
    if (loading) {
      return <h6>Carregando....</h6>;
    }
  }

  function renderEmpty() {
    if (!loading && alunos.length < 1) {
      return <p>Nenhum registro encontrado</p>;
    }
  }

  return (
    <>
      <h1>Hello APP</h1>
      {renderEmpty()}
      {renderLoading()}
      {alunos.map((aluno) => (
        <h5>{aluno.nome}</h5>
      ))}
    </>
  );
}

export default App;
