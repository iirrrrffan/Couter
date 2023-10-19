
import { Button } from "react-bootstrap";
import React, { useState } from "react";

function Count() {

    let [count,setcount]=useState(0);  
    let incri=()=>{
   setcount(count + 1)
    }

    let dicri=()=>{
   setcount(count - 1)
    
    }
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       <h3>Click the button for Counting</h3>
        <h1>{count}</h1>
        <Button onClick={incri}>+</Button> <br/><br/>
        <Button onClick={dicri}>-</Button>
    </div>
  )
}

export default Count
