import React, { useEffect } from 'react'
import './Projects_view.scss'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLeft from '../../../../public/iconos/buttonLeft';
import ButtonRight from '../../../../public/iconos/buttonRight';
import Proyect from '../../Proyect/Proyect';
import { fetchProjects } from '../../../redux/features/data/dataSlice';
import IconReact from '../../../../public/iconos/skills/iconReact';
        
export default function Projects_view({color}) {
  const dispatch = useDispatch();
  const dataProjects = useSelector(state => state.data.dataProjects);
  
  return (
    <section className='projects_view' id='proyectos'>
      <h1 className='title'>PROYECTOS</h1>
      <div className='projects_skills'>
          <div className='button_left'>
            <ButtonLeft className='svg' color={color}></ButtonLeft>
          </div>
          <div className='skills_container'>
            <div className='skill'>
              <IconReact className='svg' color={color}></IconReact>
            </div>
          </div>
          <div className='button_right'>
            <ButtonRight className='svg' color={color}></ButtonRight>
          </div>
      </div>
      <div className='projects_container'>
        <div className='timeline'>
          <div className='line'></div>
        </div>
        <div className='projects'>
          {dataProjects.map((proyect, index) => (
            <Proyect 
              name={proyect.name} 
              description={proyect.description} 
              skills={proyect.tags} 
              images={proyect.images}
              key={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}