import React from 'react'
import './styles/homepage.css';
import Navbar from '../components/Navbar';


export default function Mainpage() {
  return (
    <div className='main_page_container'>
      <Navbar />
      <section className="top">
        <div className="motto">
          <p className="phrase">No más licitaciones perdidas, ahora puedes encontrar las ideales en un solo lugar</p>
          <h1>Encuentra oportunidades de licitación al alcance de tu empresa</h1>
        </div>
        <div className="action">
          <p>Olvídate de buscar entre cientos de licitaciones, nosotros encontramos las mejores para ti.</p>
          <button>Registrarse</button>
        </div>
      </section>
      <section className="bottom">
        <img src="" alt="img-web-frame" />
        <img src="" alt="img-web-frame" />
        <img src="" alt="img-web-frame" />
        <img src="" alt="img-web-frame" />
      </section>
    </div>
  )
}
