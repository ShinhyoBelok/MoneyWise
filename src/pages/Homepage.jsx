import React from 'react'
import './styles/homepage.css';

export default function Mainpage() {
  return (
    <div className='main_page_container flexbox'>
      <section className="topSection flexbox">
        <div className="motto">
          <h4 className="phrase">No más licitaciones perdidas, ahora puedes encontrar las ideales en un solo lugar</h4>
          <h1>
            Encuentra oportunidades de licitación al alcance de tu empresa
          </h1>
        </div>
        <div className="action">
          <p>Olvídate de buscar entre cientos de licitaciones, nosotros encontramos las mejores para ti.</p>
          <button className='btnLS signupBtn'><a href="#">Ver recomendaciones</a></button>
        </div>
      </section>
      <section className="bottomSection flexbox">
        <img src="src\assets\img1.png" alt="img-web-frame" />
        <img src="src\assets\img2.png" alt="img-web-frame" />
        <img src="src\assets\img1.png" alt="img-web-frame" />
        <img src="src\assets\img2.png" alt="img-web-frame" />
      </section>
    </div>
  )
}
