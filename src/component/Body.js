import React, { useState } from "react";
    
function Body(){
   const [color,setcolor]=useState("green");
   const changecolor=()=>{
    setcolor("red")
   }
    return (
        <div>
         
            <h2>{color}</h2>
          <h2>Is it your favourate colour ?</h2>
          <button onClick={changecolor}>change colour</button>
        </div>
    )
}
export default Body