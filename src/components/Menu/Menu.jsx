import React from 'react'
import h from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () =>{
    return(
        <div className={h.food1}>
            <div><NavLink activeClassName={h.active} to="/profile">Profile</NavLink></div>
            <div><NavLink activeClassName={h.active} to="/Dialogs">Messanges</NavLink></div>
            <div><NavLink to="/Users" activeClassName={h.active}>Users</NavLink></div>npm
            <div><a href="">Music</a></div>
            <div className={h.setting}><a href="" >Setting</a></div>
        </div>
    );
}
export default Menu;