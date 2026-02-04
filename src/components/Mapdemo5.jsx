import React from 'react'

export const Mapdemo5 = () => {
    var students =[
         {id:1,name:"keval",gender:"male",age:21,marks:78,city:"anand"},
       {id:2,name:"rani",gender:"female",age:31,marks:98,city:"pune"},
       {id:3,name:"bhavy",gender:"male",age:18,marks:86,city:"dehali"}

    ]
  return (
    <div style={{textAlign:'center'}}>
        <h2>STUDENTS INFROMATON </h2>
        <table align='center' className='table table-dark' border={2}>
            <thead>
                <th>ID</th>
                 <th>NAME</th>
                  <th>AGE</th>
                   <th>MARKS</th>
                    <th>CITY</th>
                     <th>GENDER</th>
            </thead>
            <tbody>
                {
                    students.map((s)=>{
                        return <tr style={{backgroundColor:s.gender =="female" && ""}}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td style={{color:s.age>25 ?"green":"blueviolet"}}>{s.age}</td>
                            <td style={{color:s.marks>87 && "yellow"}}>{s.marks}</td>
                            <td>{s.city}</td>
                            <td>{s.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>

)
}
