import api from "../services/api";

export default async function getAlunos() {
  return (await api.get("/aluno")).data;
}

export async function saveAluno(body) {
  return await api.post("/aluno", body);
}

export async function editarAluno(body) {
  return await api.put(`/aluno/${body.id}`, body);
}

export async function removerAluno(id) {
  return await api.delete(`/aluno/${id}`);
}
