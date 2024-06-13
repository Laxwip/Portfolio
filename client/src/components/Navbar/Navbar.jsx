import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.scss'
import { setTheme } from '../../redux/features/colors/colorsSlice';

        
export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.colors.theme);

  const [activeLink, setActiveLink] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPos < section.offsetTop + section.offsetHeight * 0.75) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  const handleClick = (e, linkId) => {
    e.preventDefault(); // Prevén el comportamiento predeterminado del enlace
    const targetElement = document.getElementById(linkId); // Obtiene el elemento objetivo por ID
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta el elemento objetivo
    }
  };

return (
  <header className='Navbar'>
    <img className="logo" src="iconos/laxwipLogo.png" alt="Icono de marca LAXWIP" onClick={(e) => handleClick(e, 'inicio')}/>
    <nav className='link-list'>
      <a href="#inicio" className={activeLink === '#inicio' ? 'active' : ''} onClick={(e) => handleClick(e, 'inicio')}>INICIO</a>
      <a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={(e) => handleClick(e, 'skills')}>SKILLS</a>
      <a href="#proyectos" className={activeLink === '#proyectos' ? 'active' : ''} onClick={(e) => handleClick(e, 'proyectos')}>PROYECTOS</a>
      <a href="#contacto" className={activeLink === '#contacto' ? 'active' : ''} onClick={(e) => handleClick(e, 'contacto')}>CONTACTO</a>
    </nav>
    <div className='toggle-theme' onClick={toggleTheme}>
      <div className={`circle ${theme === "dark"? "left" : "right"}`}></div>
    </div>
  </header>
)
}