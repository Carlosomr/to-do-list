import style from './header.module.css';
import Logo from '../assets/Logo.svg';

export function Header(){

    return(
        <header className= {style.header}>
            <img src= {Logo}></img>

        </header>
    )
}