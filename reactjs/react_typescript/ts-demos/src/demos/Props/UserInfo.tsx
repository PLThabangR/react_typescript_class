import React from 'react'
import {type  Info } from './types'

// interface Info{
//   id:number,
//   name:string,
//   email:string
// }

const UserInfo  = ({user}:Info) => {
  return (
    <>

<div>
 <h1>USer</h1>
 <p>{user.id}</p>
 <p>{user.name}</p>
<p>{user.email}</p>  
<p>{user.walk()}</p>  
<p>{user.salary(5000)}</p>  



</div>

    

    
    </>
  )
}

export default UserInfo