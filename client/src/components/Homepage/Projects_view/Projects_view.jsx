import React from 'react'
import './Projects_view.scss'
import { useSelector, useDispatch } from 'react-redux';
import ButtonLeft from '../../../../public/iconos/buttonLeft';
import ButtonRight from '../../../../public/iconos/buttonRight';
import Proyect from '../../Proyect/Proyect';
        
export default function Projects_view({color}) {
  const proyectos = [
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "PORTAFOLIO",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      descripcion: "Un sitio web personal para mostrar mis proyectos, experiencia y habilidades. Implementé un diseño responsivo y componentes reutilizables con React."
    },
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "E-commerce Store",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      descripcion: "Una tienda en línea con funcionalidades de carrito de compras, filtrado de productos y gestión de usuarios. Utilicé Redux para manejar el estado global de la aplicación."
    },
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "Aplicación de Tareas",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      descripcion: "Una aplicación para gestionar tareas diarias, con opciones para agregar, editar y eliminar tareas. Implementé Vue.js para una interfaz interactiva y fácil de usar."
    },
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "Blog Personal",
      skills: ["HTML", "CSS", "JavaScript", "Gatsby", "GraphQL"],
      descripcion: "Un blog personal construido con Gatsby para obtener un sitio estático rápido y seguro. Utilicé GraphQL para consultar y mostrar datos de publicaciones."
    },
    {
      img: "https://res.cloudinary.com/dpk2wmbsb/image/upload/v1718396559/Portfolio/c14771b3-1ad4-4e65-83dc-c38e1d7971df.png",
      nombre: "Dashboard de Analíticas",
      skills: ["HTML", "CSS", "JavaScript", "React", "D3.js"],
      descripcion: "Un dashboard interactivo para visualizar datos y analíticas, con gráficos dinámicos y actualizaciones en tiempo real. Utilicé D3.js para la visualización de datos complejos."
    }
  ];
  return (
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
  )
}