import React from 'react'
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<div className={h.Header}>
        <img
            src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"/>
        <div className={h.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </div>);
}

export default Header;
