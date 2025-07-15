//import to use reducer from react
import { useReducer,useState } from 'react'
//imports from counter js
import { counterReducer,initialState } from './counterReducer'
const Counter = () => {

    //Use reducer
    const [state,dispatch] = useReducer(counterReducer,initialState)

    const [inputValue,setInputValue]= useState(0)

    const handleIncrement=()=> dispatch({type:"increment"})
     const handleDecrement=()=> dispatch({type:"decrement"})


     const incrementByAmount=()=>{
        dispatch({type:"incrementByAmount",payload:Number(inputValue)})
        //clear input
        setInputValue(0)
     }

      const decrementByAmount=()=>{
        dispatch({type:"decrementByAmount",payload:Number(inputValue)})
         //clear input
        setInputValue(0)
     }
  return (
    <>

    <h1>Count : {state.count}</h1>


    <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>decrement</button>

<div>
    <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
</div>

<button onClick={incrementByAmount}>Add</button>
<button onClick={decrementByAmount}>Sub</button>
    </>
  )
}

export default Counter