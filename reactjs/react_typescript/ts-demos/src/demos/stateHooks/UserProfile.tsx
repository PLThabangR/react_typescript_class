import React, { useState } from 'react'


interface Profile{
    name:string,
    age:number,
    email:string,
    isMarried:boolean
}
const UserProfile = () => {
    const[userProfile,setUserProfile]=useState<Profile>({
        name:"",
        age:0,
        email:"",
      
    })

        //Other method to update state
    const updateEmail=(email:string)=>{
        setUserProfile((prev)=>({...prev,email:email}) )
    }

    //  const updateIsMarried=(isMarried:string)=>{
    //         setUserProfile((prev)=>({...prev,isMarried:Boolean(isMarried)}) )
    
        
    // }
  return (
    <div>
        <h1>User proofle</h1>

    <div>
        <input type="text" value={userProfile.name} onChange={(e)=>setUserProfile({...userProfile,name:e.target.value})} placeholder='Enter name'/>
    </div>
     <div>
        <input type="number" value={userProfile.age} onChange={(e)=>setUserProfile({...userProfile,age:Number(e.target.value)})} placeholder='Enter age'/>
    </div>

     <div>
        <input type="text" value={userProfile.email} onChange={(e)=> updateEmail(e.target.value)} placeholder='Enter email'/>
    </div>


   
     {/* <div>
        <input type="" value={userProfile.isMarried} onChange={(e)=>setUserProfile({...userProfile,isMarried:e.target.value})} placeholder='Enter true or false'/>
    </div> */}
    <div>

        <p>Name :{userProfile.name}</p>
        <p>Email :{userProfile.email}</p>
        <p>Is Married :{userProfile.isMarried}</p>
        <p>Age :{userProfile.age}</p>
    </div>

    </div>
  )
}

export default UserProfile