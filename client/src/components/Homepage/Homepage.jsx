import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.scss';


import Main_view from './Main_view/Main_view';
import Projects_view from './Projects_view/Projects_view';
import Contact_view from './Contact_view/Contact_view';
export default function Homepage() {
  const savedTheme = useSelector (state => state.colors.theme);
  const color = savedTheme === "light" ? "#cd1b53" : "#14D5FF"

  return (
    <main className='Homepage'>
      <Main_view color={color}/>
      <Projects_view color={color}/>
      <Contact_view color={color}/>
    </main>
  );
}