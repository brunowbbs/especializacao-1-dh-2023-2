import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { State } from "./redux/reducers/aluno-reducer/types";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { alunos, favoritos } = useSelector<RootState, State>(
    (store) => store.alunoReducer
  );

  useEffect(() => {
    dispatch({ type: "GET_ALUNOS_SAGA" });
  }, [dispatch]);

  function isFavorite(idAluno: string) {
    return favoritos.find((favorito) => favorito._id === idAluno);
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Lista de Alunos</h1>
        {alunos.map((aluno) => (
          <h5>
            {aluno.nome}
            <button
              style={{ marginLeft: 10 }}
              onClick={() =>
                !isFavorite(aluno._id)
                  ? dispatch({ type: "ADD_FAVORITO", payload: aluno })
                  : dispatch({ type: "REMOVE_FAVORITO", payload: aluno })
              }
            >
              {isFavorite(aluno._id) ? "Desfavoritar" : "Favoritar"}
            </button>
          </h5>
        ))}
      </div>

      <div style={{ border: "1px solid red", marginLeft: 20, padding: 20 }}>
        <h1>Lista de Favoritos</h1>
        {favoritos.map((favorito) => (
          <h5>{favorito.nome}</h5>
        ))}
      </div>
    </div>
  );
}

export default App;
