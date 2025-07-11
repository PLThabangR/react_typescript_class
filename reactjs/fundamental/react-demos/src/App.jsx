
import Welcome from './components/demos/Prop_Maps/Welcome'
import ProductInfo from './components/demos/Prop_Maps/ProductInfo'
import Wikipedia from './components/Wikipedia/Wikipedia'
import Rendering from './components/demos/DynamicRendering/PasswordExample/MainCRendering'
import Weather from './components/demos/DynamicRendering/WeatherExample/Weather'
import UserStatus from './components/demos/DynamicRendering/UserStatusExample/UserStatus'
import Styling from './components/demos/styling/Styling'

function App() {
  const password = true
  const cart = []
  const isAdmin = true
  const loggedIn = false
  return (
    <>
 
   
     {/* Prop Maps  Example*/}
      {/* <Welcome/> */}
     {/* <ProductInfo/>  */}

     {/* Dynamic Rendering  Example on password*/}
     {/* <Rendering  password={password} cart={cart}/> */}

     {/* Dynamic Rendering  Example on weather*/}
     {/* <Weather temperature={20}/> */}

{/* Dynamic Rendering  Example user staus*/}
     {/* <UserStatus isAdmin={isAdmin} loggedIn={loggedIn}/> */}


{/* Inline styling  Example*/}
<Styling/>
    </>
  )
}

export default App
