import { useState } from 'react'

import './App.css'
import User from './demos/Props/User'
import UserInfo from './demos/Props/UserInfo'
import  type {  Info,AdminInfoList } from './demos/Props/types'
import AdminInfo from './demos/Props/AdminInfo'
import UserProfile from './demos/stateHooks/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  

  const user:Info={
    id:1,
    name:"Thabie",
    email:"rakgoropothabng",
    walk(){
      return `I ${this.name} is walking`
    },

    salary(pay:number){
        return pay
    }
  }


   const admin:AdminInfoList ={
    id:2,
    name:"Jeremy",
    email:"jeremy@gmail.com",
     location:[" Sandton "," Pretoria "],
     department:"Media",
     walk() {
       return `${this.name} is driving`
     },
     salary(pay:number){
      return pay
     }
    }


  // }

  return (
    <>
     
     {/* <User  user={user}/> */}
     <UserInfo  user={user}/>
      <AdminInfo admin={admin}/> 


      <UserProfile/>
    </>
  )
}

export default App
