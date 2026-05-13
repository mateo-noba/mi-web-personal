import './App.css';
import { Navbar } from './components/navbar';
import foto_profesional from "./assets/images/mi_foto_profecional.png";
import linkedin_logo from "./assets/images/LinkedIn_icon.png";

function App() {

  return (
    <div className='appPrincipal'>
      <Navbar/>
      <div className='perfilProfecional'>
        <div className='divPerfilProfecionalIzquierda'>
          <img src={foto_profesional} alt='Mateo Noba' />
          <h1>Mateo Noba</h1>
        </div>
        <div className='divPerfilProfecionalDerecha'>
          <p>Estudiante de informática orientado al desarrollo de software, con interés en programación web y creación de aplicaciones. Manejo de HTML, CSS, JavaScript y TypeScript, con conocimientos en C# y C++. Experiencia con bases de datos SQL y NoSQL (MySQL y MongoDB) y herramientas como Visual Studio Code y GitHub. Enfocado en el aprendizaje continuo y en el desarrollo de soluciones bien estructuradas.</p>
          <div className='divContacto'>
            <a href='https://www.linkedin.com/in/mateo-benjamin-noba-fioriti-9b0867345/' target='_blank'><img src={linkedin_logo}/></a>
            <a href='https://github.com/mateo-noba' target='_blank' >GitHub</a>
            <a href='./src/public/CV-Mateo-Noba.pdf' download="CV-Mateo-Noba.pdf">Descargar CV</a>
          </div>
        </div>
      </div>
      <div className='proyectos'>
        <h1>Proyectos</h1>
      </div>
    </div>
  )
}
export default App
