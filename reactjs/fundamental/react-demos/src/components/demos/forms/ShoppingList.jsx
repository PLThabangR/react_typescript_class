import React, { useState } from 'react'

const ShoppingList = () => {

    const [shoppingList,setShoppingList]=useState([])

    const [name,setName]= useState('')
    const [price,setPrice] = useState('')

const handleSubmit=(e)=>{
    e.preventDefault()

    //Check if values exist
    if(!name || !price) return ;

    //create a list object to add to array
    const newList={
        name,
        price:parseInt(price) //convert price to a number
    }

    //set the value in the state object
    setShoppingList((previousItems)=>[...previousItems,newList])

    //clear values
    setPrice('')
    setName('')
}
  return (
    <div>
        <h1>Shopping list</h1>

<form onSubmit={handleSubmit}>

<div>
    <label>Name</label>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
</div>

<div>
    <label>Price</label>
    <input type='text' value={price}  onChange={(e)=>setPrice(e.target.value)}/>
</div>

<button type="submit">Submit</button>
</form>

<h4>Display list</h4>

{
    shoppingList.map((item,index)=>(
        <div key={index}>
            <li>{item.name}</li>
              <li>{item.price}</li>
        </div>
    ))
}
    </div>
  )
}

export default ShoppingList