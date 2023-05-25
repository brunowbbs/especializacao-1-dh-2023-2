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
    // alert(JSON.stringify(aluno))
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div className="font-poppins">
      <h1>Minha table</h1>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold text-left">Ordem</th>
            <th className="py-2 px-4 font-semibold text-left">Nome</th>
            <th className="py-2 px-4 font-semibold text-left">Matricula</th>
            <th className="py-2 px-4 font-semibold text-left">Curso</th>
            <th className="py-2 px-4 font-semibold text-left">Bimestre</th>
            <th className="py-2 px-4 font-semibold text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno, index) => (
            <tr className="border-b border-b-red-700">
              <td>{index+1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.bimestre}</td>
              <td>
                <button onClick={()=>preencherCampos(aluno)} className="bg-sucess text-white text-sm p-2 hover:bg-green-950 transition ease-out delay-100">
                  Editar
                </button>
                <button onClick={()=>apagarAluno(aluno._id)} className="bg-danger text-white text-sm p-2 hover:bg-red-950 transition ease-out delay-100">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
