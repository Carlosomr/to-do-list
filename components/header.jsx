import style from './header.module.css';
import Logo from '../src/assets/Logo.svg';

export function Header(){

    return(
        <header className= {style.header}>
            <img src= {Logo}></img>

        </header>
    )
}