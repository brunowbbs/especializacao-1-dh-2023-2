import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import getCursos from "../../requests/cursos";
import { editarAluno, saveAluno } from "../../requests/aluno";
import { toast } from "react-toastify";

export default function Form(props) {
  const queryClient = useQueryClient();

  const { formData, setFormData, clearState } = props;

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const { mutate, error } = useMutation(saveAluno, {
    onSuccess: () => {
      toast.success("salvo com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => toast.error("Erro ao salvar dados"),
  });

  const { mutate: editMutate } = useMutation(editarAluno, {
    onSuccess: () => {
      toast.success("editado com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => toast.error("Erro ao salvar dados"),
  });

  function edit() {
    editMutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function save() {
    mutate({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>carregando...</h2>;
  }

  return (
    <div className="flex justify-between gap-8">
      <input
        className="h-8 w-full rounded-md px-4 text-lg"
        placeholder="Nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        className="h-8 w-full rounded-md px-4 text-lg"
        placeholder="Matricula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        className="h-8 w-full rounded-md px-4 text-lg"
        value={formData.curso}
        defaultValue={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
          <option value={curso.name} key={idx}>
            {curso.name}
          </option>
        ))}
      </select>
      <input
        className="h-8 w-full rounded-md px-4 text-lg"
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button
        className="h-8 rounded-md bg-blue-600 px-8 text-white"
        onClick={formData.id ? edit : save}
      >
        Salvar
      </button>
    </div>
  );
}
