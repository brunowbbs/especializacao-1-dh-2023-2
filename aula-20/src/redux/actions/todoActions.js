import { Api } from "../../api"

export const fetchTodos= () => {
    return async (dispatch) => {
        const response = await Api.get('/todo')
        dispatch({type:"GETALL",payload:response.data})
    } 
}