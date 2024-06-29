import style from './search.module.css';
import { Button } from './button';
export function Search (){

    return(
        <div className= {style.container}>
        <div className= {style.div}>
            <input type="text" placeholder='Adicione uma nova tarefa'></input>
            <Button title="Criar" ></Button>
        </div>
        </div>

    )
}