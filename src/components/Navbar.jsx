import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>MoneyWise</h1>
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
