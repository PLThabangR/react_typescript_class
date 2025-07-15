import { Children, createContext ,useState } from "react"



const UserContext = createContext()


const UserProvider=({children})=>{
    //create our state in here
    const [user,setUser]= useState({name:"John"})

//function to update user
const updateUser=(newUser)=>{
    setUser({name:newUser})
}
    return <UserContext.Provider value={{user,updateUser}}>
{children} 
     </UserContext.Provider>
}

export {UserContext,UserProvider}