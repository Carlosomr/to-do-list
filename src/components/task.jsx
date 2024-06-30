
import style from './task.module.css';
export function Task () {

    return(
        <article className= {style.article}>
            <div className={style.contador}>
            <span>Tarefas Criadas</span>
            <strong>Concluidas</strong>
            </div>

            
        </article>

    )
}