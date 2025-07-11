import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";

const ReactIcons = () => {
  return (
    <div>
        
        <h4><FaShoppingCart />ReactIcons</h4>
        <h4>< CiShoppingCart/>ReactIcons</h4>
       
         <h4> <MdAssignmentTurnedIn />ReactIcons</h4>
          <h4><IoChatbox />ReactIcons</h4>
        
        <div style={{background:"lightblue", borderRadius:"10px", color:"darkblue",padding:"20px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
        </div>
  )
}

export default ReactIcons