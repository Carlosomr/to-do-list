import style from './post.module.css'
import { Task } from './task';

import { Button } from './button';
import { useState } from 'react';


export function Post ({tarefa}) {
    const [novaTarefa, setNovaTarefa] = useState([])
    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask (){
        if (newTaskText == 0){
           alert("Não é possível criar uma tarefa sem adicionar uma tarefa anterior");
           return 
        }
        event.preventDefault()
       
        setNovaTarefa([...novaTarefa, newTaskText]);
        setNewTaskText('');

        
    }

    function handleNewTaskChange(){
        
        setNewTaskText(event.target.value);
        

    }
    function deleteTask(taskToDelete){
        const newTaskWhithDelete = novaTarefa.filter(novatarefa => {
            return novatarefa != taskToDelete ;
        })
        setNovaTarefa(newTaskWhithDelete);
        console.log(`Deletar a tarefa '${newTaskWhithDelete}'`);
    }


    return(
       <main className={style.search}>
       
            <form onSubmit={handleCreateNewTask} className= {style.formulario}>
            <input
            type="text" 
            name="novatarefa" 
            value={newTaskText}
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            />

    
            <footer>
            <Button type='submit' title='Criar'/>
            </footer>
           
            </form>

        <article className= {style.article}>
            <div className={style.contador}>
             <span>Tarefas Criadas</span>
             <strong>Concluidas</strong>
            </div>   
        </article>

        <div className= {style.novaTarefa}>
            {novaTarefa.map(comment =>{
                return<Task 
                key= {comment} 
                tarefa={comment}
                deleteTask={deleteTask}
                />
                
            })}
        </div>
       
        </main>
    )
}