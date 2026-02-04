import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

  const movieName =useParams().name
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>WATCHING...{movieName}</h1>
    </div>
  )
}

