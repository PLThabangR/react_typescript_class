import React from 'react'
import './index.css'
const Styling = () => {
{/* Styling using an Object*/}

const styles={
  color:"white",
  backgroundColor:"teal",
  padding:"2px",
  margin:"2px"


}

  return (
    <div>
            {/* Inline styling use camelCase backGroundColor: "teal" */}
            <h1 style={{color:"red",backgroundColor:"yellow"}}>This is inline styling</h1>
            <h1 style={{font:"10px",padding:"5px", backgroundColor:"green"}}>This is inline styling</h1>

            {/* Inline styling using an object */}
            <h1 style={styles}>This is inline styling</h1>

            <div>
                <p className='success'>This is inline styling</p>
            </div>
    </div>
  )
}

export default Styling