import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.scss';
import Github from '../../../public/iconos/github';
import Linkedin from '../../../public/iconos/linkedin';
import Proyect from '../Proyect/Proyect';
import ButtonLeft from '../../../public/iconos/buttonLeft';
import ButtonRight from '../../../public/iconos/buttonRight';
export default function Homepage() {

  const proyectos = [
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "Portfolio Personal",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      descripcion: "Un sitio web personal para mostrar mis proyectos, experiencia y habilidades. Implementé un diseño responsivo y componentes reutilizables con React."
    },
    {
      nombre: "E-commerce Store",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      descripcion: "Una tienda en línea con funcionalidades de carrito de compras, filtrado de productos y gestión de usuarios. Utilicé Redux para manejar el estado global de la aplicación."
    },
    {
      nombre: "Aplicación de Tareas",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      descripcion: "Una aplicación para gestionar tareas diarias, con opciones para agregar, editar y eliminar tareas. Implementé Vue.js para una interfaz interactiva y fácil de usar."
    },
    {
      nombre: "Blog Personal",
      skills: ["HTML", "CSS", "JavaScript", "Gatsby", "GraphQL"],
      descripcion: "Un blog personal construido con Gatsby para obtener un sitio estático rápido y seguro. Utilicé GraphQL para consultar y mostrar datos de publicaciones."
    },
    {
      nombre: "Dashboard de Analíticas",
      skills: ["HTML", "CSS", "JavaScript", "React", "D3.js"],
      descripcion: "Un dashboard interactivo para visualizar datos y analíticas, con gráficos dinámicos y actualizaciones en tiempo real. Utilicé D3.js para la visualización de datos complejos."
    }
  ];

  const savedTheme = useSelector (state => state.colors.theme);

  const color = savedTheme === "light" ? "#cd1b53" : "#14D5FF"

  return (
    <main className='Homepage'>
      <section className='main_view' id='inicio'>
        <div className='section_description'>
          <h1 className='title'>HOLA,SOY <br/><span className='resalt'>LAXWIP</span></h1>
          <h2 className="subtitle">DESARROLLADOR FRONTEND</h2>
          <p className='description'>Encantado de trabajar contigo. Soy un desarrollador <span className='resalt'>frontend</span> apasionado con habilidades en backend, comprometido en llevar nuestras ideas al siguiente nivel. <span className='resalt'>¡</span>Hagamos cosas increíbles juntos<span className='resalt'>!</span></p>
          <div className='resources'>
            <button className='download_cv'>DESCARGAR CV</button>
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
        <div className='section_grid'>
          <div className="grid-container">
            {[...Array(100)].map((_, index) => (
                <div key={index} className="grid-item"></div>
            ))}
          </div>
        </div>
      </section>
      <section className='projects_view' id='proyectos'>
        <h1 className='title'>PROYECTOS</h1>
        <div className='projects_skills'>
            <div className='button_left'>
              <ButtonLeft className='svg' color={color}></ButtonLeft>
            </div>
            <div className='skills_container'>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
              <div className='skill'></div>
            </div>
            <div className='button_right'>
              <ButtonRight className='svg' color={color}></ButtonRight>
            </div>
        </div>
        <div className='projects_container'>
          {proyectos.map((proyecto, index) => (
            <Proyect 
              img={proyecto.img}
              key={index} 
              nombre={proyecto.nombre} 
              skills={proyecto.skills} 
              descripcion={proyecto.descripcion} 
            />
          ))}
        </div>
      </section>
      <section className='contact_view' id='contacto'>
        <h1 className='title'>CONTACTO</h1>
      </section>
    </main>
  );
}