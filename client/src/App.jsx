import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import { setShowM_menu } from './redux/features/modal/modalSlice';
import { toggleMenubar } from './redux/features/condition/conditionSlice';
// import { detectSystemTheme } from './redux/features/colors/colorsSlice';

function App() {
  const theme = useSelector((state) => state.colors.theme);
  const color = theme === "light" ? "#cd1b53" : "#14D5FF"

  const dispatch = useDispatch();

  const isOpenMenubar = useSelector((state) => state.condition.isOpenMenubar);

  const menuRef = useRef(null);
  //° <--------------------------- Menú contextual --------------------------->
  // Función para manejar clicks fuera del menú contextual
  const handleClickOutside = (event) => {
    // Condiciones: 
    // 1. El menú contextual está visible
    // 2. Si existe un elemento del DOM asociado al menu contextual
    // 3. El click ocurrió fuera del menú contextual
    if (isOpenMenubar && menuRef.current && !menuRef.current.contains(event.target)) {
      dispatch(toggleMenubar(false));
    }
  };
  // Se mejora el rendimiento y los comportamientos inesperados, haciendo que solo podamos usar la funcion handleClickOutside si el menu contextual está visible (showM_menu === true). Y si el menu contextual no esta visible (showM_menu === false), se hace uso de la seccion return, donde se remueve la funcion del elemento DOM.
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenubar]);
    
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY + window.scrollY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
          className="hover-shadow"
          style={{
            boxShadow: `0 0 30px 15px ${color}`,
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        />
      <div className="app-container">
        <Navbar menuRef={menuRef}></Navbar>
        <Homepage></Homepage>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
