import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const UseStateDemo2 = () => {

    const[loading,setLoding]=useState(true)

    const stopLoding=()=>{
        setLoding(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h2>UseStateDemo2</h2>
        {
            loading == true && <h3>Loding...</h3>
        }
        <button onClick={stopLoding}>STOP</button>
    </div>
  )
}
