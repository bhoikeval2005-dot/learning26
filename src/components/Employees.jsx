import React from 'react'
import { EmployeeList } from './EmployeeList';

export const Employees = () => {
    var title="Employees App";

    var company={
        name:"TSC",
        year:2026,
    };

    var employees=[
        {id:1, name:"keval", age:21},
        {id:2, name:"raj", age:22},
        {id:3, name:"Bhavy", age:23}
    ]
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList  title={title} company={company} employees={employees}></EmployeeList>
    </div>
  )
}
