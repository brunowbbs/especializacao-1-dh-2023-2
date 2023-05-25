import api from "../services/api";

export default async function getCursos() {
  return (await api.get("/cursos")).data;
}
