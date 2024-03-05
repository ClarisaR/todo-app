import React from 'react'
import cross from '../assets/images/icon-cross.svg'
import Checkbox from './Checkbox'


export default function TodoItem(props) {
    const { todo, setTodoList, todoList } = props

    function handleChangeCompleted() {
        const newTodoList = todoList.map(currentTodo => {
            if (currentTodo.id === todo.id) {
                return { ...currentTodo, completed: !todo.completed }
            }
            return currentTodo
        })
        setTodoList(newTodoList)
    }

    function handleClickDelete() {
        const filteredTodoList = todoList.filter(todoItem => todoItem.id !== todo.id)
        setTodoList(filteredTodoList)
    }

    return (
        <div className='flex items-center p-5'>
            <Checkbox completed={todo.completed} handleChangeCompleted={handleChangeCompleted}/>
            <p className='ml-5 text-very-dark-grayish-blue dark:text-light-grayish-blue'>{todo.name}</p>
            <img src={cross} alt="cross-image" onClick={handleClickDelete} className='ml-auto cursor-pointer' />
        </div>
    )
}
