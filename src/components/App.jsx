import React, { useState } from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div className='my-12 mx-6 md:mx-36 lg:mx-72'>
        <Header/>
        <TodoForm setTodoList={setTodoList} todoList={todoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}
