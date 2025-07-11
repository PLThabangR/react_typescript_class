import React from 'react'
import ValidPassword from './ValidPassword'
import InvalidPassword from './InvalidPassword'


const Rendering = ({password,cart }) => {
   const displayCartData = cart.map((item)=>{
      return(
         <ul key={Math.random()}>
            <li>{item}</li>
         </ul>
      )
   })
  //Use traditional if else
  function checkPassword(){
     if(password){
        return <ValidPassword/>
     }
     else{
        return <InvalidPassword/>
     }
   }
  return (
   <main>
    {console.log(password,cart.length)}
    {/* Use conditional rendering */}
      {checkPassword()}

<h1>Cart</h1>
    {/* Use the array length to dynamically display data*/ }
{cart.length>0 && <p>There are {cart.length} items in the cart</p>

}
      <h4>Products</h4>
   {
      
         cart.length>0? displayCartData:<h1>No products</h1>
   }

      {/* Use ternary operator */}
      {password?<ValidPassword/>:<InvalidPassword/>}

   </main>
  )
}

export default Rendering