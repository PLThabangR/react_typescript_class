import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {
    //dedstructer update user from usercontext
    const {updateUser}= useContext(UserContext)
    const [newName,setName] = useState('')

    const handleSubmit=(e)=>{
            e.preventDefault()

            if(newName.trim()){
                updateUser(newName) //pass data to the context
                setName('') //make this empty
            }
    }

  return (
    <div>

<h2>Update user</h2>
<form onSubmit={handleSubmit}>
<input type="text" value={newName} onChange={(e)=>setName(e.target.value)} />

<button type="submit">Update value</button>
</form>

    </div>
  )
}

export default UpdateUser