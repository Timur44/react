import React from 'react';
import { NavLink } from 'react-router-dom';
import head from './Header.module.css'
const Header=(props)=>{
    return(
        <header className={head.header}>
            <span>Header</span>
            <div className={head.loginBlock}>
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;