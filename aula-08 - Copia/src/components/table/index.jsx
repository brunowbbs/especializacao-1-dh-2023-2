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
      <h1 className="font-poppins">Minha table</h1>
      <table className="min-w-full bg-slate-500">
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
            <tr className="border-b border-b-white">
              <td>{index + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.bimestre}</td>
              <td className="flex gap-2">
                <button className="border-0 bg-red-500 p-1 text-white hover:bg-red-950 transition ease-out delay-500">
                  Apagar
                </button>
                <button className="border-0 bg-green-700 p-1  text-white">
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <li key={index}>
//    <>
//     <p>{JSON.stringify(aluno)}</p>
//     {/* <h5>{index + 1}</h5>
//     <h4>{aluno.nome}</h4>
//     <p>{aluno.matricula}</p>
//     <p>{aluno.curso}</p>
//     <p>{aluno.bimestre}</p>
//     <button onClick={() => preencherCampos(aluno)}>Editar</button>
//     <button onClick={() => apagarAluno(aluno._id)}>Excluir</button>
//   </>
//               </li>
