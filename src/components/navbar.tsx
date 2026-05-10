import './navbar.css'

export function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbarIzquierda'>
                <p><b>Mateo Noba</b></p>
            </div>
            <div className='nabvarDerecha'>
                <a href='#'>Perfil profecional</a>
                <a href='#'>Proyectos</a>
            </div>
        </div>
    )
}