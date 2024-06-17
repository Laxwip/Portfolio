import React from 'react'
import './Proyect.scss'
        
export default function Proyect({ name, description, skills, img }) {
return (
  <div className="Proyect">
      <div className='image'>
        <img src={img} alt="" />
      </div>
      <div className='info'>
        <h3 className='title'>{name}</h3>
        <p className='subtitle'>Frontend</p>
        <p className='description'>{description}</p>
        <div className='tags'>
        {skills.map((skill, index) => <span key={index} className='skill'>{skill}</span>)}
        </div>
       
      </div>
  </div>
)
}