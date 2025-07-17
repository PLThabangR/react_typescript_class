import React, { useState,useEffect } from 'react'

const Meals = () => {
    const [meals,setMeals]= useState([])

    const fectData=async ()=>{

     try{
             const res = await fetch("https://dummyjson.com/recipes")

            const data= await res.json()
             console.log("Data ",data.recipes)

             //if data available setdata
        if(data.recipes && data.recipes.length) setMeals(data.recipes)

            console.log("meals",meals)
     }catch(e){
        console.log("Error",e)
     } }

     const DisplayRecipes=()=>{
      return  meals.map(({id,name,ingredients,image,rating})=>(
             <div key={id}>
                <p>Name :{name}</p>
                 <p>Ingredients :{ingredients}</p>
                 <img src={image} height={200} width={200}/>
                 <p>Rating : {rating}</p>

            </div>
        ))}
        
     


     useEffect(()=>{
    fectData()
},[])
  return (
    <div>
        <h1>Recipes</h1>

     {meals.length>0? <DisplayRecipes/> :"Loading"} 

    {/* {

         meals.map(({id,name,ingredients,image,rating})=>(
            <div key={id}>
                <p>Name :{name}</p>
                 <p>Ingredients :{ingredients}</p>
                 <img src={image} height={200} width={200}/>
                 <p>Rating : {rating}</p>

            </div>
        ))
    } */}
        

    </div>
  )
}

export default Meals