import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Checkbox from './Checkbox';

export default function TodoForm(props) {
  const { setTodoList, todoList } = props

  const [completed, setCompleted] = useState(false)
  const [todoName, setTodoName] = useState('')

  function handleChangeName(e) {
    setTodoName(e.target.value)
  }

  function handleChangeCompleted() {
    setCompleted(!completed)
  }


  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      const nextID = uuidv4()
      const newTodoList = [...todoList]
      const newTodo = { id: nextID, name: todoName, completed: completed }
      newTodoList.push(newTodo)
      setTodoList(newTodoList)

      setTodoName('')
      setCompleted(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onKeyUp={handleKeyUp} onSubmit={handleSubmit} className='bg-very-light-gray dark:bg-very-dark-desaturated-blue p-5 flex items-center rounded-md mb-4'>
      <Checkbox handleChangeCompleted={handleChangeCompleted} completed={completed}/>
      <input type="text" placeholder='Create a new todo...' onChange={handleChangeName} value={todoName} className='bg-very-light-gray dark:bg-very-dark-desaturated-blue ml-5 outline-none text-very-dark-grayish-blue dark:text-light-grayish-blue' />
    </form>
  )
}
