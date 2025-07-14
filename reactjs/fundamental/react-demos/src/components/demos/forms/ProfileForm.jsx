import React, { useState } from 'react'

const ProfileForm = () => {
const [profile,setProfile]=useState({
    name:'',
    age:''
})

const handleSubmit=(e)=>{
    e.preventDefault()

}
//Second solution
const handleChange=(e)=>{
    [name,value] = e.target

    //Set like this for object or arrays
    setProfile((prevProfile)=>({
        ...prevProfile,
        [name]:value
    }))
}


  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type='text' value={profile.name} onChange={(e)=> setProfile({...profile,name:e.target.value})}/>

    <label>Age</label>
    <input type='text' value={profile.age} onChange={(e)=> setProfile({...profile,age:e.target.value})}/>

<div>
    <h3>{profile.name}</h3>
     <h3>{profile.age}</h3>
</div>
    </form>
    

   
    </>
  )
}

export default ProfileForm