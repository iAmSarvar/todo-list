import React, { useContext, useRef } from 'react'
import { TodoContext } from '../App'

const AddTodoForm = () => {
    const addFormRef = useRef(null)
    const [todos, setTodos] = useContext(TodoContext)

    function addTodo(e){
        e.preventDefault()
        if(addFormRef.current.add.value !== ''){
            const newTodo = {
                id: Date.now(),
                title: addFormRef.current.add.value,
                isDone: false
            }
            setTodos([...todos, newTodo])
            addFormRef.current.reset()
        }
    }

    function clearAll(){
        setTodos([])
    }
    
    return (
        <form ref={addFormRef} onSubmit={addTodo} className='addform'>
            <input name='add' placeholder='Add todo' type="text" />
            <button type='submit'>Add</button>
            <button type='button' onClick={clearAll}>Clear All</button>
        </form>
    )
}

export default AddTodoForm