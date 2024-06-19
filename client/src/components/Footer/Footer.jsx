import React from 'react'
import './Footer.scss'
import Linkedin from '../../../public/iconos/linkedin'
import Github from '../../../public/iconos/github'
        
export default function Footer({color}) {
return (
  <footer className="Footer">
    <div className="text">
      <p>&copy; 2024 - Todos los derechos reservados</p>

      <p>Hecho con ❤️ por <a href="https://www.linkedin.com/in/axl-william-pacheco-huané-b1193b24a/" target="_blank">Laxwip</a></p>

      <p>Código disponible en <a href="https://github.com/Laxwip/Portfolio" target="_blank">GitHub</a></p>
    </div>
    <div className="social">
      <a href="https://www.linkedin.com/in/axl-william-pacheco-huané-b1193b24a/" target="_blank">
        <Linkedin color={color} className="icon"></Linkedin>
      </a>
      <a href="https://github.com/Laxwip" target="_blank">
        <Github color={color} className="icon"></Github>
      </a>
    </div>
  </footer>
)
}