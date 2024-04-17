import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <section className='App'>
      <div className='container'>
        <TodoForm setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </section>
  )
}

export default App
