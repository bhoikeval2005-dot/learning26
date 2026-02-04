import React from 'react'

export default function ContectComponent() {
    //const [count, setCount] = useState(0)
      var student={
        name:"kevalBHoi",
        age: 21,
        city:"Anand",
        collagename:"dr.jivaraj mehata insutute of Technology,",
        learning:"MERN STACK IN ROYAL TECNOLOGY"
      };
    
  return (
    <div>
        <h1>hello</h1>
      <h2>Name : {student.name}</h2>
      <h3>age:{student.age}</h3>
      <h3>city:{student.city}</h3>
      <h3>collagename:{student.collagename}</h3>
      <h2>learning:{student.learning}</h2>
    </div>
  )
}
