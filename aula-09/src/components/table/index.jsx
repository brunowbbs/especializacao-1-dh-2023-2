import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAlunos from "../../requests/aluno";

import { removerAluno } from "../../requests/aluno";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Table(props) {
  const { setFormData } = props;

  const queryClient = useQueryClient();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState({});

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
      <h1 className="my-5 text-white">Minha table</h1>

      <table className="min-w-full text-gray-400">
        <thead>
          <tr className="bg-slate-600/40">
            <th className="py-2 text-left font-semibold">Ordem</th>
            <th className="py-2 text-left font-semibold">Nome</th>
            <th className="py-2 text-left font-semibold">Matricula</th>
            <th className="py-2 text-left font-semibold">Curso</th>
            <th className="py-2 text-center font-semibold">Bimestre</th>
            <th className="py-2 text-center font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno, index) => (
            <tr className="border-b border-b-gray-500 font-light">
              <td>{index + 1}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.curso}</td>
              <td className="text-center">{aluno.bimestre}</td>
              <td className="flex justify-center gap-2">
                <button
                  onClick={() => preencherCampos(aluno)}
                  className="m-1 rounded-md bg-sucess p-1 text-xs font-normal text-white transition delay-100 ease-out hover:bg-green-950"
                >
                  Editar
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setAlunoSelecionado(aluno);
                  }}
                  className="text-whittransition m-1 rounded-md bg-danger p-1 text-xs font-normal text-white delay-100 ease-out hover:bg-red-950"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onAfterClose={() => setAlunoSelecionado({})}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1 className="mb-2 font-poppins">Confirmar Exclusão</h1>
          <p className="mb-8">
            Desejar excluir o aluno {alunoSelecionado.nome}?
          </p>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => {
                apagarAluno(alunoSelecionado._id);
                setIsOpen(false);
              }}
              className=" m-1 rounded-md bg-sucess px-4 py-2 text-xs font-normal text-white transition delay-100 ease-out hover:bg-green-950"
            >
              Sim
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                // apagarAluno(aluno._id);
              }}
              className="text-whittransition m-1 rounded-md bg-danger px-4 py-2 text-xs font-normal text-white delay-100 ease-out hover:bg-red-950"
            >
              Não
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
