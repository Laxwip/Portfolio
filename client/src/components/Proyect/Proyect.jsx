import React from 'react'
import './Proyect.scss'
import Github from '../../../public/iconos/github'
import IconWeb from '../../../public/iconos/iconWeb'
        
export default function Proyect({ name, description, skills, img, website, github, color, category}) {
return (
  <div className="Proyect">
      
      <div className='info'>
        <h3 className='title'>{name}</h3>
        <p className='subtitle'>{category}</p>
        <p className='description'>{description}</p>
        <div className='tags'>
        {skills.map((skill, index) => <span key={index} className='skill'>{skill}</span>)}
        </div>
        <div className='buttons'>
          <a className="button website" target='_blank' href={website}>
            <Github className="icon" color={color}></Github>
            <span className='name'>Website</span>
          </a>
          <a className="button repository" target='_blank' href={github}>
            <IconWeb className="icon" color={color}></IconWeb>
            <span className='name'>Repository</span>
          </a>
        </div>
      </div>
      <div className='image'>
        <img src={img} alt="" />
      </div>
  </div>
)
}