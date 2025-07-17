import { useState } from 'react'

import './App.css'
import User from './demos/Props/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <User  name={"Thabang"} age={30}/>
    </>
  )
}

export default App
