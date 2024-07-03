
import { Header } from './components/header';
import { Post } from './components/post';
import { Task } from './components/task';

import './global.css';
export function App() {

// interação de post
const tarefas = [
    {
      id: 1,
      tarefa: 'Organizar meu primeiro projeto',
      className: 'tarefa' // Definindo className como 'tarefa'
    },
    {
      id: 2,
      tarefa: 'primeiro projeto',
      className: 'tarefa' // Definindo className como 'tarefa'
    },
 
  ];

  
  return (
    <>
    <Header/>
    <Post/>
    {tarefas.map(tasks => (
    <Task 
    key={tasks.id} 
    tarefa={tasks.tarefa} />
    ))}
    
    
    </>
  )
}

