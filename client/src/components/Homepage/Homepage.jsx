import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.scss';

export default function Homepage() {

  const savedTheme = useSelector (state => state.colors.theme);

  const color = savedTheme === "light" ? "#cd1b53" : "#14D5FF"

  return (
    <main className='Homepage'>
      <section className='main_view' id='inicio'>
        <div className='section_description'>
          <h1 className='title'>HOLA,SOY <br/><span className='resalt'>LAXWIP</span></h1>
          <h2 className="subtitle">DESARROLLADOR FRONTEND</h2>
          <p className='description'>Encantado de trabajar contigo, se que podremos llevar nuestras ideas hacia el siguiente nivel</p>
          <div className='resources'>
            <button className='download_cv'>DESCARGAR CV</button>
            <div className='social_buttons'>
              <a className='social_button' href='https://github.com/Laxwip' target='_blank'>
                <svg className='svg' xm5lns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">    <path fill={color} d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
              </a>
              <a className='social_button' href='https://github.com/Laxwip' target='_blank'>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">    <path fill={color} d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className='section_grid'>
          <div className="grid-container">
            {[...Array(100)].map((_, index) => (
                <div key={index} className="grid-item"></div>
            ))}
          </div>
        </div>
      </section>
      <section className='skills_view' id='skills'>
        <h1>SKILLS</h1>
      </section>
      <section className='projects_view' id='proyectos'>
        <h1>PROYECTOS</h1>
      </section>
      <section className='contact_view' id='contacto'>
        <h1>CONTACTO</h1>
      </section>
    </main>
  );
}