import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Todo = () => {
    const [todos,setTodos]= useState([])
    //Value to set the state
    const [inputValue,setInputValue]= useState('')
     const [inputLocation,setInputLocation]= useState('')

     const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(inputLocation)
      console.log(inputValue)
      if(!inputValue || !inputLocation) return 

      setTodos((todos)=>
        [...todos,{id:Math.floor(Math.random()*100),name:inputValue,location:inputLocation}]
      )

      console.log(todos)
      //clear value
      setInputLocation("")
      setInputValue("")
     }


     const handleRemove =(id)=>{
       // e.preventDefault()
        console.log("Removed clicked")
       setTodos( (todos)=>todos.filter((todo)=> todo.id!=id))
     }
    
  return (
    <>
    <h1>Todo app</h1>
 <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Todo event</Form.Label>
        <Form.Control type="text" value={inputValue} placeholder="enter todo"  onChange={e=> setInputValue(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" value={inputLocation} placeholder="location" onChange={e=> setInputLocation(e.target.value)} />
      </Form.Group>

     <Button type='submit'>Submit</Button>
    </Form>


<div>
   <h1>Todo list</h1>
   {
   
   todos.map(({id,name,location})=>(
    <div key={id}>
      <p>{name}</p>
      <p>{location}</p>
      
     <Button  onClick={()=>handleRemove(id)}>delete</Button>
    </div>
   ))
   }  
</div>

    </>
  )
}

export default Todo