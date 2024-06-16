import React from 'react'
import './Proyect.scss'
        
export default function Proyect({ name, description, skills, img }) {
return (
  <div className="Proyect">
      <img src={img} alt="" />
      <h3>{name}</h3>
      {skills.map((skill, index) => <span key={index}>{skill}</span>)}
      <p>{description}</p>
  </div>
)
}