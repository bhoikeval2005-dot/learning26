import React from 'react'

export const Mapdemo1 = () => {
    let cars=["audi","bmw","mercidese","tata","punch","leborgini"]
  return (
    <div>
        {
          cars.map((s) =>{
           return <h1>{s}</h1>
          })
        }
    </div>
  )
}
