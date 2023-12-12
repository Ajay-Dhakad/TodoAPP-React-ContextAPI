import React,{useState} from 'react'
import { useTodo } from '../Context/TodoContetx'

function TodoItem({todo}) {

    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()



    const edit = () => {

        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const togglecompleted = () => {

        toggleComplete(todo.id)    

    }





  return (
    <div  className='todoitem'>
        <input disabled={isTodoEditable} type="checkbox" checked={todo.completed} onChange={togglecompleted} name="" id="" />
        <input type="text" className={ todo.completed ? 'strike':''}  value={todoMsg}  onChange={(e) => setTodoMsg(e.target.value)}  name="" id="" readOnly={!isTodoEditable}   />
        <button disabled={todo.completed} onClick={() => {

            if (todo.completed) return 

            if (isTodoEditable){

                edit()
            }
            else{

                setIsTodoEditable(prev => !prev)

            }
        }}>{isTodoEditable ? '📁' : '✏️'}</button>
        <button onClick={() => {
            deleteTodo(todo.id)

        }}>❌</button>
      </div>
  )
}

export default TodoItem
