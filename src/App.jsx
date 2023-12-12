import { useState,useEffect } from 'react'
import { TodoForm , TodoItem} from './Components/index'
import { TodoProvider } from './Context/TodoContetx'



function App() {

  const [todos,settodos] = useState([])


  const addTodo = (todo) => {

    settodos((prev) => [{id:Date.now(),...todo},...prev])
 
  }

  const updateTodo = (id,todo) => {

    settodos((prev) => prev.map((prevtodo) => (prevtodo.id===id ? todo : prevtodo)))

  }

  const deleteTodo = (id) => {

    settodos(prev => prev.filter(todo => (todo.id !== id) ))

  }

  const toggleComplete = (id) => {

    settodos(prev =>  prev.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))

    
  }

  useEffect(()=>{

    const todo = JSON.parse(localStorage.getItem('todos'))

    if (todo &&  todo.length > 0){

      settodos(todo)

    }
  },[])


  useEffect(() => {

localStorage.setItem('todos',JSON.stringify(todos))
    

  },[todos])
  
  

  return (

    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='interface'>
      <h1>Manage Your Task's</h1>

        <TodoForm/>

<section >

{todos.length === 0 ? <h1 className='notodo'>    Please Add a New Task !    </h1> : ''}

    {

todos.map(todo => 
  <div key={todo.id}>
  

   <TodoItem  func={addTodo}  todo = {todo} />
   
   </div> )

    }
</section>





    </div>
    </TodoProvider>
  )
}

export default App
