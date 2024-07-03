import style from './post.module.css'

import { Button } from './button';

export function Post ({tarefa}) {

    return(
       <main className={style.search}>
       
            <form className= {style.formulario}>
            <input type="text" placeholder='Adicione uma nova tarefa'></input>
            <Button title='Criar'/>
            </form>

        <article className= {style.article}>
            <div className={style.contador}>
             <span>Tarefas Criadas</span>
             <strong>Concluidas</strong>
            </div>   
        </article>
       
        </main>
    )
}