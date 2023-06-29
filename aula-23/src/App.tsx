import { useEffect } from "react";
import { useAluno } from "./hooks/useAluno";
import { AlunosList } from "./components/alunos-list";

function App() {
  const { aluno, setAluno, alunos, setAlunos, fetchAlunos } = useAluno();

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  return (
    <>
      <h1>Hello World</h1>
      Nome: {aluno}
      <input onChange={(e) => setAluno(e.target.value)} />
      <AlunosList />
    </>
  );
}

export default App;
