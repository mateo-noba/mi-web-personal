import './App.css';
import { Navbar } from './components/navbar';

function App() {

  return (
    <div className='appPrincipal'>
      <Navbar/>
      <div className='perfilProfecional'>
        <div className='divPerfilProfecionalIzquierda'>
          <img src='./src/assets/images/mi_foto_profecional.png' />
          <h1>Mateo Noba</h1>
        </div>
        <div className='divPerfilProfecionalDerecha'>
          <p>Estudiante de informática orientado al desarrollo de software, con interés en programación web y creación de aplicaciones. Manejo de HTML, CSS, JavaScript y TypeScript, con conocimientos en C# y C++. Experiencia con bases de datos SQL y NoSQL (MySQL y MongoDB) y herramientas como Visual Studio Code y GitHub. Enfocado en el aprendizaje continuo y en el desarrollo de soluciones bien estructuradas.</p>
          <div className='divContacto'>
            <a>Linkedin</a>
            <a>GitHub</a>
            <a>Descargar CV</a>
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
