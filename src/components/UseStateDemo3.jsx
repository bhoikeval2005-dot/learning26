import React, { useState } from 'react'

export const UseStateDemo3 = () => {

  const[users,setUsers]=useState(["raj","sumit"]);

  const addUsers=()=>{
    setUsers([...users,"romit"])
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2>UseStateDemo3</h2>
      {
        users.map((u)=>{
          return <li><h3>{u}</h3></li>
        })
      }
      <button onClick={addUsers}>+</button>
    </div>
  )
}

