import './card.css';
import {IconBrandGithub} from '@tabler/icons-react';


interface CardProp{
    img:string
    texto:string
    link:string
}


export function Card({img, texto, link}:CardProp){
    return(
        <div className='card'>
            <img src={img}/>
            <h2>{texto}</h2>
            <a href={link} target='_blank'><IconBrandGithub className='icono'/>Repositorio</a>
        </div>
    )
}