import React, { useContext , useState, useRef, createContext } from 'react'
import AddTodoForm from './components/AddTodoForm'
import List from './components/List'

export const TodoContext = createContext(null)
export const ModalContext = createContext(null)

const App = () => {
  const [todos, setTodos] = useState([])
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      <div className='container'>
        <AddTodoForm />
        <List />
      </div>
    </TodoContext.Provider>
  )
}

export default App