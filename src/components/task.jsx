import { CheckCircle, Trash } from '@phosphor-icons/react';
import style from './task.module.css';

export function Task ({tarefa, deleteTask}){

  function handleDeleteTask() {

    deleteTask(tarefa);
  }
     return (

            <div className= {style.checkbox}>
                    <div className= {style.check}>
                    <CheckCircle size={20}></CheckCircle>
                     </div>
                   
            <div className={style.tarefa}>
                <p>{tarefa}</p>
            </div>
          <button onClick={handleDeleteTask}>
          <Trash color='red' size={20}/>
          </button>
            </div>
    )
}
