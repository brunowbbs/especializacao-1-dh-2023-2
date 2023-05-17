import api from "../services/api";

export async function getTodos(){
    return (await api.get("/todo")).data
}

/**
 * Função para adicionar nova tarefa
 * @param {{title:string, date: Date}} todo 
 */
export async function addTodo(todo){
    return (await api.post("/todo", todo)).data
}