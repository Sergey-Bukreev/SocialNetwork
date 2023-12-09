import React from 'react';
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props: any) => {
    return (
            <div  className={classes.message}>
                {props.message}
            </div>
    )
}

export const Dialogs: React.FC = (props: any) => {

    let DialogsData:{id:number, name:string}[] = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Sergio"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ]

    let MessageData:{id:number, message:string}[] = [
        {id: 1, message: "Nice to meet you"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you"},
        {id: 4, message: "IT-Incubator"},
    ]

    let dialogsElements:JSX.Element[] = DialogsData.map((el:{id:number, name:string})=>
    <DialogItem name={el.name} id={el.id} /> )

    let messagesElements:JSX.Element[] = MessageData.map((el:{id:number, message:string}) =>
     <Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
