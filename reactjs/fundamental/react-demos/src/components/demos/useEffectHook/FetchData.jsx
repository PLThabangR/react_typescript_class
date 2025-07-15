import React, { useEffect, useState } from 'react'

const FetchData = () => {
const [data,setData]= useState([])

useEffect(()=>{

    const getData =async()=>{

      const response =await fetch("https://jsonplaceholder.typicode.com/todos")
        //convert to json 
        const data= await response.json()


        //if data available setdata
        if(data && data.length) setData(data)
    }


    //call the function to execute
    getData()
},[])

  return (
    <div>
        <div>
 {data.map((item)=>(
            <ul key={item.id}>
                <li>{item.title}</li>
                    <li>{item.completed}</li>
            </ul>
        ))} 

        </div>
       
    </div>
  )
}

export default FetchData