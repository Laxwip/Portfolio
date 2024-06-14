import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
// import { detectSystemTheme } from './redux/features/colors/colorsSlice';

function App() {
  const theme = useSelector((state) => state.colors.theme);
  const color = theme === "light" ? "#cd1b53" : "#14D5FF"
    
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
      <div className="app-container">
        <div
          className="hover-shadow"
          style={{
            boxShadow: `0 0 30px 15px ${color}`,
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        />
        <div className='root'>
          <Navbar></Navbar>
          <Homepage></Homepage>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
