import React , {useState} from 'react'
import { useTodo } from '../Context/TodoContetx'

function TodoForm() {

    const [todo,SetTodo] = useState('')
     const {addTodo} = useTodo()

     const newtodo = (e) => {

        e.preventDefault()

        if(!todo) return 

        addTodo({todo,completed:false})

        SetTodo('')


     }

  return (
    <form className='todoform' onSubmit={newtodo} action="">
    <input value={todo}   onChange={(e) => SetTodo(e.target.value)} type="text" placeholder='Enter Your Todo Here....' name="" id=""  required/>
    <input value='Add Task' type="submit" />
  </form>
  )
}

export default TodoForm
