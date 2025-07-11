import React from 'react'

const Button = () => {
const handleClick=()=>{
    console.log(Math.floor(Math.random()*100))
}

const handleCopy=()=>{
    console.log("Copied")
}

const handleMove=()=>{
    console.log("Mouse Moved")
}



  return (
    <>
     <button style={{backgroundColor:"blue",color:"white"}} onClick={handleClick} >Click Me</button>

     <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur tempora veritatis, dolorum laudantium, adipisci ut maxime sed facilis, voluptas rerum iste cupiditate deserunt voluptate optio omnis culpa blanditiis eligendi?</p>
    
     <p onMouseMove={handleMove}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur tempora veritatis, dolorum laudantium, adipisci ut maxime sed facilis, voluptas rerum iste cupiditate deserunt voluptate optio omnis culpa blanditiis eligendi?</p>
    
    
    </>
   
     
  )
}

export default Button