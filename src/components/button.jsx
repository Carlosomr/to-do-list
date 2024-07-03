import style from './button.module.css';
import botao from '../assets/botao.svg';




export function Button ({title, ...rest}){

    return(
        
        <button className= {style.button} type="Button" {...rest}>
            {title} <img src= {botao}></img>
        </button>
        
    )
}