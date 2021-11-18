import React from 'react';
import h from "./../Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogsItems = (props) =>{
    let path = '/Dialogs/' + props.id;
    return(
        <div>
            <div className={h.DialogsItems}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}

export default DialogsItems;