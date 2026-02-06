import React from 'react'
import { Link } from 'react-router-dom'
export const FunctionDemo1 = () => {
    const test =()=>{
        alert("text function called...")
    }
    const text2=(x)=>{
        alert("vlaue of X :"+x)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FUNCTIONDEMO1</h1>
        
        <button onClick={test}>CLICK1</button>
        <button onClick={()=>{text2(10)}}>CLICK2</button>

    </div>
  )
}
