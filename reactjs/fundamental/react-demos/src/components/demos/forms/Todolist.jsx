import { useState } from "react"

const Todolist = () => {
    const [todo,setTodo] = useState([])
    const [inputValue,setInputValue]= useState('')

  const  handleSubmit=(e)=>{
      e.preventDefault()
        
      if(inputValue.trim()){
        setTodo([...todo,inputValue])
        setInputValue('')
      }

    }

    const handleChange=(e)=>{
      e.preventDefault()
      setInputValue(e.target.value)
    }


  return (
    <div>
       <form onSubmit={handleSubmit}>
 <label>Event name</label>
        <input type="text" value={inputValue} onChange={handleChange}  placeholder="Name of event" />

          <button type="submit">Add todo</button>
       </form>

         {todo.map((todo)=>(
          <div key={Math.random()}>
            <p>{todo}</p>
          </div>
        ))} 

        </div>
  )
}

export default Todolist