import style from './post.module.css'
import lixeira from '../assets/lixeira.svg'

export function Post () {
    return(
        <div className= {style.checkbox}>
            <div className= {style.check}>
            <input type="checkbox"></input>
            </div>
            <div className={style.tarefa}>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </div>
            <img src={lixeira}></img> 
        </div>
    )
}