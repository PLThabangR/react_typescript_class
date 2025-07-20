import React from 'react'
import {type AdminInfoList } from './types'

const AdminInfo = ({admin}:AdminInfoList) => {
  return (
    <div>
      <h1>Admin</h1>
    <p>{admin.id}</p>
     <p>{admin.name}</p>
      <p>{admin.email}</p>
       <p>{admin.department}</p>
        <p>{admin.location}</p>
       <p>{admin.walk()}</p>  
       <p>{admin.salary(12000)}</p>  

    </div>
  )
}

export default AdminInfo