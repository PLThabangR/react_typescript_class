import React from 'react'
import Welcome from './Welcome'
const ProductInfo = () => {
   const product = ["a","b","c"]
   let imageAddress= "https://picsum.photos/200/300"

   const userInfo=[
    {   
        id:1,
      name:"Thabang",
      age:25,
      city:"Johannesburg"
   },

    {   
      id:2,
      name:"George",
      age:28,
      city:"Pretoria"
   },

    {
        id:3,
      name:"Sipho",
      age:37,
      city:"Boksburg"
   },


]

const updatedUserinfo=userInfo.map((user)=>{
    return{
        ...user,
        age:user.age+1,
        isMarried: user.age>30?true:false
    }
})

            //Use destructuring
    const displayUserInfo=userInfo.map(({id,name,age,city})=>{
        return(
            <ul key={id}> 
                <li>{name}</li>
                <li>{age}</li>
                <li>{city}</li>


               </ul>
        )
    })
   const displayProducts= product.map((item,index)=>{
      return(
        <ul key={index}>
           <li>{item}</li>
           
       </ul>
      )
   })
  return (
    <main>
       {displayProducts}
       {displayUserInfo}
       <img src={imageAddress} width={200} height={200}/>
       {console.log("Updated User Info",updatedUserinfo)}

       <Welcome imageAddress={imageAddress} name={"Thabang"} age={25} hobbies={["coding","sleeping","Eating"]}/>
           </main>
  )
}

export default ProductInfo