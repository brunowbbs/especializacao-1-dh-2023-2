import { useAluno } from "../../hooks/useAluno";

export function AlunosList() {
  const { alunos } = useAluno();

  return (
    <ul>
      {alunos.map((aluno) => (
        <li>{aluno.nome}</li>
      ))}
    </ul>
  );
}
