import React from 'react'

const Weather = ({temperature}) => {
    function diplayWeather(){
//  Check if tempis a number 
if(typeof temperature !== "number"){
    return <p>Temperature is not a number</p>
}

        if(temperature<=10){
            return <p>It is cold</p>
        }else if(temperature>10 && temperature<=25){
            return <p>It's nice outside</p>
        }else{
            return <p>It is hot</p>
        }
    }
  return (
    <div>
        {diplayWeather()}

    </div>
  )
}

export default Weather