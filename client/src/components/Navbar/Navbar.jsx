import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.scss';
import { setTheme } from '../../redux/features/colors/colorsSlice';
import LaxwipLogo from '../../../public/laxwip-logo';
import { toggleMenubar } from '../../redux/features/condition/conditionSlice';
import IconMenu from '../../../public/iconos/iconMenu';

export default function Navbar({ menuRef }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.colors.theme);
  const isOpenMenubar = useSelector((state) => state.condition.isOpenMenubar);

  const color = theme === "light" ? "#cd1b53" : "#14D5FF";
  const [activeLink, setActiveLink] = useState('#inicio');
  const menuIconRef = useRef(null); // Usamos useRef para rastrear el icono del menú

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop - section.offsetHeight * 0.1 && scrollPos <= section.offsetTop + section.offsetHeight * 1.25) {
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
    e.preventDefault();
    const targetElement = document.getElementById(linkId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleBar = () => {
    dispatch(toggleMenubar(!isOpenMenubar));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpenMenubar && 
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        menuIconRef.current && 
        !menuIconRef.current.contains(event.target)
      ) {
        dispatch(toggleMenubar(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenubar, menuRef, dispatch]);

  return (
    <header className='Navbar'>
      <LaxwipLogo color={color} className={"logo"} alt={"Icono de marca LAXWIP"} onClick={(e) => handleClick(e, 'inicio')} />

      <nav className={`link-list ${isOpenMenubar ? "visible" : ""}`} ref={menuRef}>
        <a href="#inicio" className={activeLink === '#inicio' ? 'active' : ''} onClick={(e) => handleClick(e, 'inicio')}>INICIO</a>
        <a href="#proyectos" className={activeLink === '#proyectos' ? 'active' : ''} onClick={(e) => handleClick(e, 'proyectos')}>PROYECTOS</a>
        <a href="#contacto" className={activeLink === '#contacto' ? 'active' : ''} onClick={(e) => handleClick(e, 'contacto')}>CONTACTO</a>
        <div className='toggle-theme' onClick={toggleTheme}>
          <div className={`circle ${theme === "dark" ? "left" : "right"}`}></div>
        </div>
      </nav>

      <div className='toggle-bar' onClick={toggleBar} ref={menuIconRef}>
        <IconMenu color={color} className="svg"></IconMenu>
      </div>
    </header>
  );
}
