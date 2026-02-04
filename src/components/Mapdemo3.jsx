import React from 'react'

export const Mapdemo3 = () => {

     var students =[
        {id:1,name:"keval",gender:"male",age:21,marks:78,city:"anand"},
       {id:2,name:"raj",gender:"male",age:31,marks:98,city:"pune"},
       {id:3,name:"bhavy",gender:"male",age:18,marks:86,city:"dehali"}

    ]
  return (
    <div style={{textAlign:'center'}}>
        <table border="2" align='center'className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>AGE</th>
                    <th>CITY</th>
                    <th>MARKS</th>

                </tr>
            </thead>
            <tbody>
                {
                    students.map((st) =>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.gender}</td>                        
                            <td>{st.age}</td>
                            <td>{st.city}</td>
                            <td>{st.marks}</td>
                            </tr>
                    })
                }
            </tbody>

        </table>
    </div>
  )
}
