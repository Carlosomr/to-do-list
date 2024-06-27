import style from './task.module.css';
import { Button } from './button';
export function Task (){

    return(
        <article className= {style.article}>
            <input type="text"></input>
            <Button title="Criar"></Button>
        </article>

    )
}