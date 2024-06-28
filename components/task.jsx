import style from './task.module.css';
import { Button } from './button';
export function Task (){

    return(
        <div className= {style.container}>
        <article className= {style.article}>
            <input type="text" placeholder='Adicione uma nova tarefa'></input>
            <Button title="Criar"></Button>
        </article>
        </div>

    )
}