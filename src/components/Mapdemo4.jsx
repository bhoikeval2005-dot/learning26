import React from 'react'

export const Mapdemo4 = () => {
    var cities =[
        {id:1,cityName:"dehli",pop:1000000,AQI:305},
        {id:2,cityName:"surat",pop:25000000,AQI:205},
        {id:3,cityName:"mumbai",pop:50430000,AQI:105}
        
    ]
  return (
    <div style={{textAlign:'center'}}>
        <table align='center' className='table table-dark'>
            <thead>
                <th>ID</th>
                <th>CITY</th>
                <th>POP</th>
                <th>AQI</th>
            </thead>
            <tbody>
                {
                    cities.map((c)=>{
                     return   <tr>
                        <td>{c.id}</td>
                        <td>{c.cityName}</td>
                        <td>{c.pop}</td>
                        <td>{c.AQI}</td>

                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
  )
}
