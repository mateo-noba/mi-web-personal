import './card.css';
import {IconBrandGithub} from '@tabler/icons-react';


interface CardProp{
    img:string
    texto:string
    tecnologias:string[]
    link:string
}


export function Card({img, texto,tecnologias, link}:CardProp){
    return(
        <div className='card'>
            <img src={img}/>
            <h2>{texto}</h2>
            
            {tecnologias.map((tecnologias) => (
                <p key={tecnologias}>{tecnologias}</p>
            ))}
        
            <a href={link} target='_blank'><IconBrandGithub className='icono'/>Repositorio</a>
        </div>
    )
}