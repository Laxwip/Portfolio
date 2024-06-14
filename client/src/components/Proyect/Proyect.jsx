import React from 'react'
import './Proyect.scss'
        
export default function Proyect({ nombre, skills, descripcion, img }) {
return (
  <div className="Proyect">
      <img src={img} alt="" />
      <h3>{nombre}</h3>
      <p><strong>Skills:</strong> {skills.join(', ')}</p>
      <p>{descripcion}</p>
  </div>
)
}