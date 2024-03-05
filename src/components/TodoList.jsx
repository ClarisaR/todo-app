import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { todoList, setTodoList } = props

  const [todoListVisible, setTodoListVisible] = useState('all')

  const itemsLeft = todoList.filter(todoItem => !todoItem.completed).length

  let filteredTodoList = [...todoList]

  if (todoListVisible === 'active') {
    filteredTodoList = filteredTodoList.filter(todoItem => !todoItem.completed)
  }
  if (todoListVisible === 'completed') {
    filteredTodoList = filteredTodoList.filter(todoItem => todoItem.completed)
  }

  function handleClickTodoListVisible(newState) {
    setTodoListVisible(newState)
  }
  function handleClearCompleted() {
    const newTodoList = todoList.filter(todoItem => !todoItem.completed)
    setTodoList(newTodoList)
  }
  function isSelected(selected) {
    return todoListVisible === selected
  }

  return (
    <div className='bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-md'>
      {filteredTodoList.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id} setTodoList={setTodoList} todoList={todoList} />)}
      <div className='flex justify-between relative md:static p-5 text-dark-grayish-blue dark:text-light-grayish-blue'>
        <small>{itemsLeft} items left</small>
        <div 
          className='absolute md:static bottom-[-100px] md:bottom-auto left-0 md:left-auto bg-very-dark-desaturated-blue md:bg-inherit p-5 md:p-0 w-full md:w-auto rounded-md md:rounded-none flex items-center justify-center gap-x-4'>
          <small
            onClick={() => handleClickTodoListVisible('all')}
            className={`cursor-pointer ${todoListVisible === 'all' ? 'text-bright-blue hover:text-bright-blue' : 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover'}`}
          >
            All
          </small>
          <small
            onClick={() => handleClickTodoListVisible('active')}
            className={`cursor-pointer ${todoListVisible === 'active' ? 'text-bright-blue hover:text-bright-blue' : 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover'}`}>
            Active
          </small>
          <small
            onClick={() => handleClickTodoListVisible('completed')}
            className={`cursor-pointer ${todoListVisible === 'completed' ? 'text-bright-blue hover:text-bright-blue' : 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover'}`}>
            Completed
          </small>
        </div>
        <small onClick={handleClearCompleted} className='cursor-pointer hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover'>Clear Completed</small>
      </div>
    </div>
  )
}
