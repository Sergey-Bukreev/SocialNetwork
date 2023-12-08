import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props:any) => {
    let path = "/dialogs" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:any) => {
    return (<div className={classes.message}>
            {props.message}
    </div>
    )
}
export const Dialogs:React.FC = () => {
    return (
        <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name="Dimych" id="1"/>
                    <DialogItem name="Sveta" id="2"/>
                    <DialogItem name="Sergey" id="3"/>
                    <DialogItem name="Alisa" id="4"/>
                    <DialogItem name="Victor" id="5"/>
                </div>

            <div className={classes.messages}>
                <Message message={"Hello"}/>
                <Message message={"welcome to IT Incubator"}/>
                <Message message={"Nice to meet you"}/>

            </div>
            <div>

            </div>
        </div>
    );
};

