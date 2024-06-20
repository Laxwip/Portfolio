import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.scss';
import Main_view from './Main_view/Main_view';
import Projects_view from './Projects_view/Projects_view';
import { fetchProjects } from '../../redux/features/data/dataSlice';
import LoadingProjectsView from './Loading_view/LoadingProjectsView';


export default function Homepage() {
  const dispatch = useDispatch();
  const savedTheme = useSelector (state => state.colors.theme);
  const isLoading = useSelector(state => state.data.isLoading);
  const color = savedTheme === "light" ? "#cd1b53" : "#14D5FF"
  const colorBackground = savedTheme === "light" ? "#d7ddea" : "#111016"

  

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <main className='Homepage'>
      <Main_view color={color} colorBackground={colorBackground}/>
      <Projects_view color={color}/>
      {/* <Contact_view color={color}/> */}
      {
        isLoading && (
          <div className='loading_container'>
            <LoadingProjectsView></LoadingProjectsView>
            <LoadingProjectsView></LoadingProjectsView>
            <LoadingProjectsView></LoadingProjectsView>
            <LoadingProjectsView></LoadingProjectsView>
          </div>
        )
      }
    </main>
  );
}