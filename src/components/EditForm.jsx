import React, { useContext, useState } from 'react'
import { TodoContext } from '../App'

const EditForm = ({toggleEditForm, isOpen, todo}) => {
    const [todos, setTodos] = useContext(TodoContext)
    const [inputValue, setInputValue] = useState(todo.title)

    function editTodo(e){
        e.preventDefault()
        if(inputValue !== ''){
            todos.map(t => {
                if(t.id === todo.id){
                    t.title = inputValue
                }
            })
            toggleEditForm()
        }
    }

  return (
    <div style={{display: isOpen ? 'flex' : 'none'}} className='backdrop'>
        <form onSubmit={(e) => {editTodo(e)}} className='editform'>
            <input autoFocus={true} onChange={(e) => {
                setInputValue(e.target.value)
            }} value={inputValue} type="text" placeholder='edit' />
            <div>
                <button onClick={toggleEditForm} type='button'>Cancel</button>
                <button>Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditForm