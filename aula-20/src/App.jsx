import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { fetchTodos } from './redux/actions/todoActions';



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])

  const {todo} = useSelector((state)=>state.todo);
  console.log(todo)

  return (
    <>
    <ul>
      {todo.map(task=>(
       <li key={task._id}>
        <h1>{task.title}</h1>
       </li>
      ))}
    </ul>
    </>
  )
}

export default App

