import React, { useContext } from 'react'
import ListItem from './ListItem'
import { TodoContext } from '../App'

const List = () => {
  const [todos] = useContext(TodoContext)
  return (
    <ul className='list'>
        {
            todos.length < 1 ? <li className='list-item'>No Tasks</li> : todos.map(todo => {
                return(
                    <ListItem key={todo.id} todo={todo}/>
                )
            })
        }
    </ul>
  )
}

export default List