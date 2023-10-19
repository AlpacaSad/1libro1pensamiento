import { useState } from 'react'
import './index.css'

function Landing() {

  return (
    <>
      <div className='main-header'>
        <h1>Un libro, un pensamiento</h1>
        <h3>Mis reflexiones sobre algunos libros que voy leyendo o escuchando</h3>
        <a href="#temas" className="cta-button">¡Escucha y lee conmigo!</a>
      </div>

      <div className='main-section'>
          <h2>Beneficios Principales</h2>
          <ul>
              <li>Tutoriales interactivos</li>
              <li>Ejercicios prácticos</li>
              <li>Mejora tus habilidades matemáticas</li>
          </ul>
      </div>

      <div className="secondary-section">
          <h2>Recursos Destacados</h2>
          {/* <!-- Agrega aquí tus recursos destacados --> */}
      </div>

      <div className="secondary-section">
          <h2>Testimonios de Estudiantes</h2>
          {/* <!-- Agrega aquí tus testimonios --> */}
      </div>

      <div className="secondary-section">
          <h2>Nuestro Equipo</h2>
          {/* <!-- Agrega aquí información sobre tu equipo --> */}
      </div>

      <div className="secondary-section" id='temas'>
          <h2>Vamos a leer estos libros</h2>
          <a href="/001">Madame Bovary</a>
      </div>

      <footer>
          <h3>&copy; 2023 Un libro, un pensamiento</h3>
      </footer>
    </>
  )
}

export default Landing
