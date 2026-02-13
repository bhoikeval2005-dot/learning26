import React from 'react'

export const SubEmployeeList = (props) => {
    console.log(" sub Employee props ",props)
    
  return (
    <div>
        <h5>SubEmployeeList</h5>
        <h4>{props.title}</h4>
    </div>
  )
}
