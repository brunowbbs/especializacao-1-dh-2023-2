import api from "../services/api";

export default async function getAlunos() {
  return (await api.get("/aluno")).data;
}

export async function saveAluno(body) {
  return await api.post("/aluno", body);
}
