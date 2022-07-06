import React from 'react';
import {
    NavLink} from "react-router-dom";
import classes from "./header.module.css"



function Header() {

    return (
        <div className='menu'>
            <ul className='menuWrapper'>

                <li>
                    <NavLink to='/' className={classes.link}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={classes.link}>О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={classes.link}>Портфолио</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;