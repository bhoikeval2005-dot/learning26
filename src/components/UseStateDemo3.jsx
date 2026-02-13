import React, {useState} from 'react'
import { Link } from 'react-router-dom'  
           
export const UseStateDemo3 = () => {

  const [users, setUsers] = useState(["Raj","Keval"]);

  const addUser =()=>{

    setUsers([...users,"Bhavy"])
  }
  return (
    <div style={{textAlign:"center"}}>
      <h2> UseStateDemo3</h2>
      {
        users.map((u)=>{
          return <li>{u}</li>
        })
      }
      <button onClick={addUser}>push</button>
    </div>
  )
}
