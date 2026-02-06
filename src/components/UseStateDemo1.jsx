import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const UseStateDemo1 = () => {
  
  const[count,setcount]= useState(0)
  //count --> stateVariable..
    //setCount --> setter function --> it will use for update state variable..
    //useState(0) -->0 will act as inital value
   const increseCount =()=>{
    setcount(count+1)
    console.log('count after increase',count)
   }
  return (
    <div style={{textAlign: "center"}}>
        <h2>USESTATEDEMO1</h2>
        <h3>count={count}</h3>
        <button onClick={increseCount }>+</button>

    </div>
  )
}

