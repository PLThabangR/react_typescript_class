import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
    //We are only destructuring the user
    const {user } =useContext(UserContext)

  return (
    <div>
        <h2>User profile</h2>
        <p>{user.name}</p>
    </div>
  )
}

export default UserProfile