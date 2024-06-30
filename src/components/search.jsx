import style from './search.module.css';
import { Button } from './button';
export function Search (){

    function createTask(){
        event.preventDefault();
        console.log('oi');
      }

    return(
        <div className= {style.container}>
        <div className= {style.div}>
            <input onSubmit={createTask} type="text" placeholder='Adicione uma nova tarefa' method="get"></input>
            <Button type="submit" title="Criar" ></Button>
        </div>
        </div> 

    )
}