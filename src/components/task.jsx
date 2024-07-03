import { CheckCircle, Trash } from '@phosphor-icons/react';
import style from './task.module.css';

export function Task (props){
     return (

            <div className= {style.checkbox}>
                    <div className= {style.check}>
                    <CheckCircle size={20}></CheckCircle>
                     </div>
                   
            <div className={style.tarefa}>
                <p>{props.tarefa}</p>
            </div>
          <button>
          <Trash color='white' size={20}/>
          </button>
            </div>
    )
}
