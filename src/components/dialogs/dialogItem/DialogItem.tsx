import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name:string
    id:number
}

export const DialogItem:React.FC<DialogItemPropsType> = (props: DialogItemPropsType) => {
    let path:string = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

