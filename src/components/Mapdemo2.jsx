import React from 'react'

export const Mapdemo2 = () => {
    var users =[
        {id:1,name:"keval",gender:"male",age:21},
       {id:2,name:"raj",gender:"male",age:31},
       {id:3,name:"bhavy",gender:"male",age:18}

    ]
  return (
    <div>
        {
            users.map((u) =>{
                return <li>{u.id} -{u.name}  -{u.age}  -{u.gender}</li>
            })
        }
    </div>
  )
}
