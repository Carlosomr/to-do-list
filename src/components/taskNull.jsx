import style from './taskNull.module.css'
import Clipboard from '../assets/Clipboard.svg';

export function TaskNull () {
    return (
        <aside>
          
            <img src= {Clipboard}></img>
            <p>Você ainda não tem tarefas cadastradas <br/>
            Crie tarefas e organize seus itens a fazer</p>
       
        </aside>

    )
}