import React from 'react'

interface User{
    name:string,
    age:number
}
const User = ({name,age}: User) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>

    </div>
  )
}

export default User