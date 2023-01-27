import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'
import EditForm from './EditForm'

const ListItem = ({todo}) => {
  const [todos, setTodos] = useContext(TodoContext)
  const [isDone, setIsDone] = useState(todo.isDone)
  const [isOpen, setIsOpen] = useState(false)

  function removeTodo(id){
    setTodos(
        todos.filter(todo => {
            if(todo.id !== id){
                return todo
            }
        })
    )
  }

  function completeTodo(){
    setIsDone(!isDone)
  }

  function toggleEditForm(){
    setIsOpen(!isOpen)
  }

  return (
    <li className='list-item'>
        {
          <EditForm todo={todo} isOpen={isOpen} toggleEditForm={toggleEditForm}/>
        }
        <div>
            <input onChange={completeTodo} value={isDone} type="checkbox"/>
            <span>
                {
                    isDone ? <del>{todo.title}</del> : <>{todo.title}</>
                }
            </span>
        </div>
        <div>
            <button onClick={toggleEditForm}>Edit</button>
            <button onClick={() => {removeTodo(todo.id)}}>Delete</button>
        </div>
    </li>
  )
}

export default ListItem