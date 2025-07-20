import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './tasks/todo_app/todo'
import Meals from './tasks/fetchData/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Todo/>
        <Meals/>
        {console.log("Answer is ",10/2)}
    </>
  )
}

export default App
