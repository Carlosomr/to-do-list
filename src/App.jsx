
import { Header } from '../components/header';
import { Task } from '../components/task';
import style from './App.module.css';

import './global.css';
export function App() {
  
  return (
    <>
    <Header/>
    <main className= {style.wrapper}>
    <Task/>
    </main>
    </>
  )
}

