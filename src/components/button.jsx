import style from './button.module.css';
import botao from '../assets/botao.svg';




export function Button ({title}){

    return(
        
        <button className= {style.button} type="Button">
            {title} <img src= {botao}></img>
        </button>
        
    )
}