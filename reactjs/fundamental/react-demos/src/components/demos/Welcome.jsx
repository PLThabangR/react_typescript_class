import React from 'react'

const Welcome = ({name,age,hobbies,imageAddress}) => {
    const message ="Hello World";
    const message2= "Welcome to learn react";

    const multipy=(a,b)=>{
        return a*b
    }
const date= new Date()
    const person= {
        color:"red",
        fontSize:"10px",
        fontWeight:"bold",
        backgroundColor:"yellow"
    }
  return (
    <section>
        {date.toDateString()}
        <h1>{message}</h1>
        <p>{message2}</p>

    <p>3*4={multipy(3,4)}</p>



    <h1 className={person}>Hello</h1>

    <h1>Prop drilling</h1>
    <img src={imageAddress} width={200} height={200}/>
    
   <p>{name}</p>
   <p>{age}</p>
   <p>{hobbies}</p>


    </section>
  )
}

export default Welcome