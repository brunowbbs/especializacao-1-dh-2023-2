import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAlunos from "../../requests/aluno";

import { removerAluno } from "../../requests/aluno";
import { toast } from "react-toastify";

export default function Table(props) {
  const queryClient = useQueryClient();
  const { formData, setFormData } = props;

  const { data, isFetching } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(removerAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Apagado com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao apagar aluno");
    },
  });

  if (isFetching) {
    return <h3>Buscando alunos...</h3>;
  }

  function apagarAluno(id) {
    // alert(id);
    mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div>
      <h1>Minha table</h1>
      <ul>
        {data.map((aluno, index) => {
          delete aluno._id;
          delete aluno.__v;

          return (
            <li key={index}>
              <>
                <p>{JSON.stringify(aluno)}</p>
                {/* <h5>{index + 1}</h5>
                <h4>{aluno.nome}</h4>
                <p>{aluno.matricula}</p>
                <p>{aluno.curso}</p>
                <p>{aluno.bimestre}</p> */}
                <button onClick={() => preencherCampos(aluno)}>Editar</button>
                <button onClick={() => apagarAluno(aluno._id)}>Excluir</button>
              </>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
