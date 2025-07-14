
import Welcome from './components/demos/Prop_Maps/Welcome'
import ProductInfo from './components/demos/Prop_Maps/ProductInfo'
import Wikipedia from './components/Wikipedia/Wikipedia'
import Rendering from './components/demos/DynamicRendering/PasswordExample/MainCRendering'
import Weather from './components/demos/DynamicRendering/WeatherExample/Weather'
import UserStatus from './components/demos/DynamicRendering/UserStatusExample/UserStatus'
import Styling from './components/demos/styling/Styling'
import ReactIcons from './components/demos/react-icons/ReactIcons'
import Buttons_main from './components/demos/butttons_and_functions/Buttons_main'

//State and hook components
import State_Arrays from './components/state_and_hooks/State_Arrays'
import State_Objects from './components/state_and_hooks/State_Objects'
import Todolist from './components/demos/forms/Todolist'
import ProfileForm from './components/demos/forms/profileForm'
import ShoppingList from './components/demos/forms/shoppingList'

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
{/* <Styling/> */}

{/* ReactIcons  Example*/}
{/*<ReactIcons/>*/}

{/* Button component  Example*/}
     {/* <Buttons_main/> */}


{/* <State_Arrays/>
<State_Objects/> */}

{/* Todo list with forms and state */}

<Todolist/>
<ProfileForm/>
<ShoppingList/>
    </>
  )
}

export default App
