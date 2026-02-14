import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const nameHandler =(event)=>{
        console.log(event.trget.value)
        setName(event.trget.value)
    }
    const ageHandler =(event)=>{
       
        setAge(event.trget.value)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h2>InputDemo1</h2>
        <div>
            <label >NAME:-</label>
            <input type='text' onchange={(event)=>{nameHandler}}></input>
            {name}
        </div>
        <div>
            <label >AGE:-</label>
            <input type='text' onchange={(event)=>{ageHandler}}></input>
            {age}
        </div>
    </div>
  )
}
