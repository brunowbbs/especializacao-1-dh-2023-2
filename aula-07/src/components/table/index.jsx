import { useQuery } from "@tanstack/react-query";
import getAlunos from "../../requests/aluno";

export default function Table() {
  const { data, isFetching } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  console.log(data);

  if (isFetching) {
    return <h3>Buscando alunos...</h3>;
  }

  return (
    <div>
      <h1>Minha table</h1>
      <ul>
        {data.map((aluno, index) => (
          <li key={index}>
            <>
              <h4>{aluno.nome}</h4>
              <p>{aluno.matricula}</p>
              <p>{aluno.curso}</p>
              <p>{aluno.bimestre}</p>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
