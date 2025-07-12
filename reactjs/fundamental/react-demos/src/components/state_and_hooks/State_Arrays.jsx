import { useState } from 'react'
const State_Arrays = () => {
   const  [count,setCount] = useState(0)
   //The first element is the current state and the second is a function to update the state
console.log(count)

//Working with state array
const [fruits,setFruits] = useState(["apple","banana","orange","lemon"])
//Function to increase 
const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
  }

  const addFruits=()=>{
    setFruits([...fruits,"cherry"])
  }

  //logic to remove 
  const removeFruits=()=>{
    setFruits(fruits.filter((item)=>item!="orange"))
  }

  //Logic to update
  const updateFruits =()=>{
    //update current value
    setFruits(fruits.map((item)=> item=="banana"?"sweet chillie": item))
  }
    return (
    <>
  <h1>{count}</h1>

  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
    {/*Rendering array items to the display*/ }
    {
        fruits.map((item,index)=>{
          return(
          <div key={index}>
            <p> {item}</p>
          </div>
        )})
    }
    <button onClick={addFruits}>Add</button>
    <button onClick={removeFruits}>Remove</button>
    <button onClick={updateFruits}>Update</button>
    </>
  )
}

export default State_Arrays