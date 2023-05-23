import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getCursos from "../../requests/cursos";
import { saveAluno } from "../../requests/aluno";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const { mutate, error } = useMutation(saveAluno, {
    onSuccess: () => alert("salvo com sucesso"),
    onError: () => alert("Erro ao salvar dados"),
  });

  function save() {
    mutate({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
  }

  if (error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>carregando...</h2>;
  }

  return (
    <div>
      <input
        placeholder="Nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        placeholder="Matricula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        value={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        {data.cursos.map((curso, idx) => (
          <option key={idx}>{curso.name}</option>
        ))}
      </select>
      <input
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button onClick={save}>Salvar</button>
    </div>
  );
}
