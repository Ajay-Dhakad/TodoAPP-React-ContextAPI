import React,{useState} from 'react'
import { useTodo } from '../Context/TodoContetx'

function TodoItem({todos}) {

    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todos.todo)
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    

    const edit = () => {

        updateTodo(todos.id,{...todos,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const togglecompleted = () => {

        toggleComplete(todos.id)    

    }





  return (
    <div  className='todoitem'>
        <input disabled={isTodoEditable} type="checkbox" checked={todos.completed} onChange={togglecompleted} name="" id="" />
        <input type="text" className={ todos.completed ? 'strike':''}  value={todoMsg}  onChange={(e) => setTodoMsg(e.target.value)}  name="" id="" readOnly={!isTodoEditable}   />
        <button disabled={todos.completed} onClick={() => {

            if (todos.completed) return 

            if (isTodoEditable){

                edit()
            }
            else{

                setIsTodoEditable(prev => !prev)

            }
        }}>{isTodoEditable ? '📁' : '✏️'}</button>
        <button onClick={() => {
            deleteTodo(todos.id)

        }}>❌</button>
      </div>
  )
}

export default TodoItem
