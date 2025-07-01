import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <header>
        <div className="top-bar">
          <img src="pics/logo-utn.png" alt="Logo UTN" className="img1" />
          <img src="pics/redes-sociales.png" alt="Redes Sociales" className="img2" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/becas-estudiante">Becas</Link></li>
            <li><Link to="/pasantias-empresa">Pasantías empresa</Link></li>
            <li><Link to="/pasantias-estudiante">Pasantías estudiante</Link></li>
            <li><Link to="/iniciar-sesion-empresa">Cuenta empresa</Link></li>
            <li><Link to="/iniciar-sesion-estudiante">Cuenta estudiante</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="ofertas">
          <h2>Ofertas de pasantías</h2>
          <button className="filtro">Filtros</button>
          <ol></ol>
        </section>
        <section className="formulario">
          <h2>Formulario de consulta</h2>
          <form>
            <input type="text" placeholder="Ingrese su nombre completo" />
            <input type="text" placeholder="Asunto" />
            <input type="email" placeholder="Ingrese su mail" />
            <textarea placeholder="Escriba su consulta..."></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="footer-links">
          <div>
            <h4>CUENTA</h4>
            <p><Link to="/iniciar-sesion-empresa" className="blanco">Empresa</Link><br />
              <Link to="/iniciar-sesion-estudiante" className="blanco">Estudiante</Link></p>
          </div>
          <div>
            <h4>PASANTÍAS</h4>
            <p><Link to="/pasantias-empresa" className="blanco">Empresa</Link><br />
              <Link to="/pasantias-estudiante" className="blanco">Estudiante</Link></p>
          </div>
          <div>
            <h4>BECAS</h4>
            <p><a href="https://www.argentina.gob.ar/educacion/progresar" className="blanco">PROGRESAR</a><br />
              <a href="https://becasmanuelbelgrano.educacion.gob.ar/ingreso_postulantes.php" className="blanco">Manuel Belgrano</a><br />
              <a href="https://www.youtube.com/watch?v=a4DvykxXbXk" className="blanco">Becas SAE</a></p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.492506636951!2d-62.10631149512025!3d-31.421116535701174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb28503f73860f%3A0xa4607cc996083ed4!2sUTN%20Facultad%20Regional%20de%20San%20Francisco!5e0!3m2!1ses-419!2sar!4v1746719984823!5m2!1ses-419!2sar" width="600" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <address>
          Av. de la Universidad 501<br />
          (2400) San Francisco<br />
          Córdoba - República Argentina<br />
          Tel. (03564) 421147 / 435402<br />
          <a href="sau@frsfco.utn.edu.ar" className="blanco">sau@frsfco.utn.edu.ar</a><br />
          <a href="sau.utnsanfco@gmail.com" className="blanco">sau.utnsanfco@gmail.com</a>
        </address>
      </footer>
    </>
  );
}

export default Inicio;
