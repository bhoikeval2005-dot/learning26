import React, { useState } from 'react'

export const InputDemo2 = () => {
   const[name,setName]= useState("")
   const [gender, setGender] = useState("")
   const [country, setCountry] = useState("")

   const nameHandler=(e)=>{
    setName(e.target.value)
   }
    const genderHandler=(e)=>{
    setGender(e.target.value)
   }
  return (
    <div style={{textAlign:'center'}}>
        <h2>InputDemo2</h2>
        <div>
            <label >NAME :</label>
            <input type="text" onChange={(e)=>{nameHandler(e)}}></input>
            {name}
        </div><br></br>
        <div>
            <label >GENDER :</label> 
            
            MALE <input type='radio' value='male' name='gender' onChange={(e)=>{genderHandler(e)}}></input>
             
          FEMALE <input type='radio' value='female' name='gender' onChange={(e)=>{genderHandler(e)}}></input>

     <h1>   {gender}</h1>
        </div><br></br>
        <div>
            <label >COUNTRY :</label>
            <select onChange={(e)=>{setCountry(e.target.value)}}>
              <option value="india">INDIA</option>
              <option value="usa">USA</option>
               <option value="china">CHINA</option>
             </select>
             <h2>{country}</h2>
        </div>
        <input type="submit"></input>
    </div>
  )
}
