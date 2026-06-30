import './App.css';
import { Navbar } from './components/navbar';
import {Card} from './components/card';
import foto_profesional from './assets/images/mi_foto_profesional.png';
import pvzClone from './assets/images/FotoDelJuego1.png';
import FNviajes from './assets/images/fnviajes.png';
import { IconBrandLinkedin, IconBrandGithub, IconDownload } from '@tabler/icons-react';

function App() {
  return (
    <div className='appPrincipal'>
      <Navbar/>
      <div className='perfilProfesional' id='perfilProfesional'>
        <div className='divPerfilProfesionalIzquierda'>
          <img src={foto_profesional} alt='Mateo Noba' />
        </div>
        <div className='divPerfilProfesionalDerecha'>
          <div className='textoProfesional'>
            <h1>¡Hola, soy Mateo Noba!</h1>
            <p>Técnico superior en desarrollo de software - Técnico en informática</p>
          </div>
          <div className='habilidadesTecnicas'>
            <p>HTML/CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>C++</p>
            <p>C#</p>
          </div>
          <div className='divContacto'>
            <a className='botonContacto' href='https://www.linkedin.com/in/mateo-benjamin-noba-fioriti-9b0867345/' target='_blank'><IconBrandLinkedin className='icono'/></a>
            <a className='botonContacto' href='https://github.com/mateo-noba' target='_blank' ><IconBrandGithub className='icono'/></a>
            <a className='botonDescargarCV' href='./src/public/CV-Mateo-Noba.pdf' download="CV-Mateo-Noba.pdf"><IconDownload className='icono'/>Descargar CV</a>
          </div>
        </div>
      </div>
      <div className='proyectos' id='proyectos'>
        <h1>Proyectos</h1>
        <div className='proyectoContenido'>
          <Card
          img={pvzClone}
          texto='Plantas vs Zombies clone'
          tecnologias={['C#', 'Unity', 'Node.js', 'MongoDB']}
          link='https://github.com/mateo-noba/Plantas-vs-zombies-clone.git'
          />
          <Card
          img={FNviajes}
          texto='Página de viajes'
          tecnologias={['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB']}
          link='https://github.com/mateo-noba/FNviajes.git'
          />
        </div>
      </div>
    </div>
  )
}
export default App
