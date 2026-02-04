import React from 'react'
import logo from './player.jpg'
import "../assets/css/image.css"
export const Portfolio = () => {
   
    var player ={

        name:"virat kohali",
        date_of_birth:"5 November 1988",
        age:37,
        profession:"professional indian cricketer & Entrepreneur",
        skill:"Leadership ,Strtegic Thinking,Consistency & Discipline,Teamwork, Fitness & Mental Strength"
        

        

    };
    
  return (
    <div >
       
       <img src={logo} alt='player' className='image'></img>
        <h1 className='header'>Name:{player.name}</h1>
       <h2  className='header'>age:{player.age}</h2>
        <h3>profession:{player.profession}</h3>
        <h4>skill:{player.skill}</h4>
      

    </div>
  )
}
