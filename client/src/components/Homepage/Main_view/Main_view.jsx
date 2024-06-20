import React from 'react'
import './Main_view.scss'
import Github from '../../../../public/iconos/github';
import Linkedin from '../../../../public/iconos/linkedin';
import { useSelector, useDispatch } from 'react-redux';
import pdfUrl from '../../../../public/pdf/Axl_Pacheco.pdf';
import IconMarco from '../../../../public/iconos/iconMarco';
import IconDown from '../../../../public/iconos/iconDown';

        
export default function Main_view({color, colorBackground}) {
  const handleDownloadCV = () => {
    window.open(pdfUrl, '_blank');
  };
  return (
    <section className='main_view' id='inicio'>
      <div className='section_description'>
        <h1 className='title'>HOLA,SOY <span className='resalt'>LAXWIP</span></h1>
        <h2 className="subtitle">DESARROLLADOR FRONTEND</h2>
        <p className='description'>Encantado de trabajar contigo. Soy un desarrollador <span className='resalt'>frontend</span> apasionado con habilidades en backend, comprometido en llevar nuestras ideas al siguiente nivel. <span className='resalt'>¡</span>Hagamos cosas increíbles juntos<span className='resalt'>!</span></p>
        <div className='resources'>
          <button className='download_cv' onClick={handleDownloadCV}>DESCARGAR CV</button>
          <div className='social_buttons'>
            <a className='social_button' href='https://github.com/Laxwip' target='_blank'>
              <Github className={"svg"} color={color}></Github>
            </a>
            <a className='social_button' href='https://www.linkedin.com/in/axl-william-pacheco-huané-b1193b24a' target='_blank'>
              <Linkedin className={"svg"} color={color}></Linkedin>
            </a>
          </div>
        </div>
      </div>
      <div className='section_logo'>
        <IconMarco color={color} colorBackground={colorBackground} className="marco" className2="sombra"></IconMarco>
        <div className='shadow'></div>
      </div>
      <div className='scroll'>
        <IconDown className="down" color={color}></IconDown>
        <IconDown className="down" color={color}></IconDown>
      </div>
    </section>
  )
}