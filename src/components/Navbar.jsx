import React from 'react'
import './style/navbar.css'

export default function Navbar() {
  return (
    <nav>
      <h2>MoneyWise</h2>
      <ul>
        <li><a href="#">Soluciones</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Oportunidades</a></li>
        <li><a href="#">Precios</a></li>
      </ul>
      <button className='loginBtn'>Iniciar Sesión</button>
      <button className='signupBtn'>Registrarse</button>
    </nav>
  )
}
