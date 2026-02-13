import React from 'react'
import { SubEmployeeList } from './SubEmployeeList'

export const EmployeeList = (props) => {
    console.log("emList",props)

  return (
    <div>
        <h4>EmployeeList</h4>
        {props.title}
       <h5>{props.company.name}</h5>
        <h5>{props.company.year}</h5>
        <table className='table'>
            <thead>
               <tr>
                <th>Id</th>
                <th>NAME</th>
                <th>AGE</th>
               </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
       <SubEmployeeList title={props.title}></SubEmployeeList>
    </div>
  )
}
