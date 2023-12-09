import React from 'react';
import classes from "./Dialogs.module.css"
import {DialogItem, DialogItemPropsType} from "./dialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";



type DialogsPropsType = {
    dialogData: Array<DialogItemPropsType>
    messageData: Array<MessagePropsType>
}


export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {

    let dialogsElements:JSX.Element[] = props.dialogData.map((el:{id:number, name:string})=>
    <DialogItem name={el.name} id={el.id} /> )

    let messagesElements:JSX.Element[] = props.messageData.map((el:{ message:string}) =>
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
