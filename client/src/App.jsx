import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer/Footer';
import { setShowM_menu } from './redux/features/modal/modalSlice';
import { toggleMenubar } from './redux/features/condition/conditionSlice';

function App() {
  const theme = useSelector((state) => state.colors.theme);
  const color = theme === "light" ? "#cd1b53" : "#14D5FF";

  const dispatch = useDispatch();
  const isOpenMenubar = useSelector((state) => state.condition.isOpenMenubar);

  const menuRef = useRef(null);

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
        <Navbar menuRef={menuRef} />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
