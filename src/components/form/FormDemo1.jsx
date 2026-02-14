import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm()
  const [userData, setUserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const SubmitHandler = (data) => {
    console.log(data)
    setUserData(data)
    setisSubmited(true)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>FormDemo1</h2>
      <form onSubmit={handleSubmit(SubmitHandler)}>

        <div>
          <label >NAME :</label>
          <input type='text' placeholder='enter your name' {...register("firstname")}></input>
        </div>
        <div>
          <label>AGE :</label>
          <input type='number' {...register("age")}></input>
        </div>
        <div>
          <label>GENDER :</label>
          MALE<input type='radio' value='male' {...register("gender")}></input>
          FEMALE<input type='radio' value='female'{...register("gender")}></input>
        </div>
        <div>
          <label>HOBBIES :</label>
          CRICKET :<input type='checkbox' value='cricket' {...register("hobbies")}></input>
          WATCHING-NEWS  :<input type='checkbox' value='watchingnews'{...register("hobbies")}></input>
          WRIGHTING  :<input type='checkbox' value='wrighting'{...register("hobbies")}></input>


        </div>
        <div><input type='submit'></input></div>
        {
          isSubmited == true && <div>
            <h1>output</h1>
            <h2>Name:{userData.firstname}</h2>
            <h2>Age:{userData.age}</h2>
            <h2>Gender:{userData.gender}</h2>
            <h2>hobbies:</h2>
            <ul>
              {userData.hobbies?.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>


          </div>
        }
      </form>
    </div>
  )
}
