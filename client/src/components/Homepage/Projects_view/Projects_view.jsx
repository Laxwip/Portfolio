import React, { useEffect } from 'react'
import './Projects_view.scss'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLeft from '../../../../public/iconos/buttonLeft';
import ButtonRight from '../../../../public/iconos/buttonRight';
import Proyect from '../../Proyect/Proyect';
import { fetchProjects } from '../../../redux/features/data/dataSlice';
import IconReact from '../../../../public/iconos/skills/iconReact';
import IconVite from '../../../../public/iconos/skills/iconVite';
import IconRedux from '../../../../public/iconos/skills/iconRedux';
import IconHTML from '../../../../public/iconos/skills/iconHTML';
import IconCSS from '../../../../public/iconos/skills/iconCSS';
import IconSass from '../../../../public/iconos/skills/iconSass';
import IconJs from '../../../../public/iconos/skills/iconJs';
import IconFigma from '../../../../public/iconos/skills/iconFigma';
import IconPostreSql from '../../../../public/iconos/skills/iconPostreSql';
import IconNode from '../../../../public/iconos/skills/iconNode';
import IconGit from '../../../../public/iconos/skills/iconGit';
import IconExpress from '../../../../public/iconos/skills/iconExpress';
import IconSequelize from '../../../../public/iconos/skills/iconSequelize';
import IconElectron from '../../../../public/iconos/skills/iconElectron';
        
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
                <IconJs className="skillIcon" color={color}></IconJs>
                <div className='tooltip'>JavaScript</div>
              </div>
              <div className='skill'>
                <IconReact className="skillIcon" color={color}></IconReact>
                <div className='tooltip'>React</div>
              </div>
              <div className='skill'>
                <IconVite className="skillIcon" color={color}></IconVite>
                <div className='tooltip'>Vite</div>
              </div>
              <div className='skill'>
                <IconRedux className="skillIcon" color={color}></IconRedux>
                <div className='tooltip'>Redux</div>
              </div>
              <div className='skill'>
                <IconHTML className="skillIcon" color={color}></IconHTML>
                <div className='tooltip'>HTML</div>
              </div>
              <div className='skill'>
                <IconCSS className="skillIcon" color={color}></IconCSS>
                <div className='tooltip'>CSS</div>
              </div>
              <div className='skill'>
                <IconSass className="skillIcon" color={color}></IconSass>
                <div className='tooltip'>Sass</div>
              </div>
              <div className='skill'>
                <IconFigma className="skillIcon" color={color}></IconFigma>
                <div className='tooltip'>Figma</div>
              </div>
              <div className='skill'>
                <IconPostreSql className="skillIcon" color={color}></IconPostreSql>
                <div className='tooltip'>PostgreSQL</div>
              </div>
              <div className='skill'>
                <IconNode className="skillIcon" color={color}></IconNode>
                <div className='tooltip'>Node.js</div>
              </div>
              <div className='skill'>
                <IconGit className="skillIcon" color={color}></IconGit>
                <div className='tooltip'>Git</div>
              </div>
              <div className='skill'>
                <IconExpress className="skillIcon" color={color}></IconExpress>
                <div className='tooltip'>Express</div>
              </div>
              <div className='skill'>
                <IconSequelize className="skillIcon" color={color}></IconSequelize>
                <div className='tooltip'>Sequelize</div>
              </div>
              <div className='skill'>
                <IconElectron className="skillIcon" color={color}></IconElectron>
                <div className='tooltip'>Electron</div> 
              </div>
          </div>
          <div className='button_right'>
            <ButtonRight className='svg' color={color}></ButtonRight>
          </div>
      </div>
      <div className='projects_container'>
        {/* <div className='timeline'>
          <div className='line'></div>
        </div> */}
        <div className='projects'>
          {dataProjects.map((proyect, index) => (
            <Proyect 
              name={proyect.name} 
              description={proyect.description} 
              skills={proyect.tags} 
              img={proyect.urlImage}
              key={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}