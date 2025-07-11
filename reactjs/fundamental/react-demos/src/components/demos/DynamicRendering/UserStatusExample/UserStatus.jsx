import React from 'react'

const UserStatus = ({isAdmin,loggedIn}) => {
  return (
    <section>
        {isAdmin && loggedIn ? <p>Welcome Admin</p> : <p>Welcome user</p>}

       


    </section>
  )
}

export default UserStatus