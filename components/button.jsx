import style from './button.module.css';




export function Button ({title}){

    return(
        
        <button className= {style.button} type="Button">
            {title}
        </button>
        
    )
}