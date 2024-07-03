import style from './post.module.css'
import { Task } from './task';

import { Button } from './button';
import { useState } from 'react';


export function Post ({tarefa}) {
    const [novaTarefa, setNovaTarefa] = useState([
        'Fazer lição',
      

    ])

    function handleCreateNewTask (){
        event.preventDefault()

        const newTaskText = event.target.novatarefa.value
        console.log(event.target.novatarefa.value)

        setNovaTarefa([...novaTarefa, newTaskText])
        console.log(novaTarefa);

        event.target.novatarefa.value = '';
    }

    return(
       <main className={style.search}>
       
            <form onSubmit={handleCreateNewTask} className= {style.formulario}>
            <input type="text" name="novatarefa" placeholder='Adicione uma nova tarefa'></input>
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
                return <Task tarefa={comment}/>
            })}
        </div>
       
        </main>
    )
}