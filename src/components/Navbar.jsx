import React from 'react'
import './style/navbar.css'

export default function Navbar() {
  return (
    <nav className='flexbox'>
      <h2>MoneyWise</h2>
      <ul className='flexbox'>
        <li><a href="#">Soluciones</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Oportunidades</a></li>
        <li><a href="#">Precios</a></li>
      </ul>
      <div className="sessionBtn flexbox">
        <button className='btnLS loginBtn'>
          <a href="#">Iniciar Sesión</a>
        </button>
        <button className='btnLS signupBtn'>
          <a href="#">Registrarse</a>
        </button>
      </div>
    </nav>
  )
}
