import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
// import { detectSystemTheme } from './redux/features/colors/colorsSlice';

function App() {
  // const dispatch = useDispatch();

  const theme = useSelector((state) => state.colors.theme);
  
  // useEffect(() => {
  //   dispatch(detectSystemTheme());
  //   }, [dispatch])
    
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  // console.log("🚀 ~ App ~ theme:", theme)
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>

        <Route
        path='/'
        element={<Homepage></Homepage>}
        
        ></Route>
      </Routes>
      <Footer></Footer>
      
    </>
  )
}

export default App
