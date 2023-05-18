import axios from "axios"

const api = axios.create({
    baseURL:"https://api-todo-six.vercel.app/"
})

export default api