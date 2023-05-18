import api from "../services/api";

export async function getTodos() {
  return (await api.get("/todo")).data;
}

/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo
 */
export async function addTodo(todo) {
  return (await api.post("/todo", todo)).data;
}

/**
 * Função para editar uma tarefa
 * @param {{title:string, date: Date}} todo
 * @param {number} id
 */
export async function editTodo(data) {
  return (await api.put(`/todo/${data.id}`, data.payload)).data;
}

/**
 * Função para remover uma tarefa
 * @param {number} id
 */
export async function deleteTodo(id) {
  return (await api.delete(`/todo/${id}`)).data;
}
