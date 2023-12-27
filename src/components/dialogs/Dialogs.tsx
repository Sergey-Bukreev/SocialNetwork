import React from 'react';
import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./Message/Message";
import classes from "./Dialogs.module.css";
import {DialogState} from "../../redux/dialogReducer";

type DialogsPropsType = {
    dialogsPage:DialogState
    updateNewMessageText:(messageText:string) => void
    sendMessage: ()=> void
};

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements: JSX.Element[] = props.dialogsPage.dialogsData.map((el) => (
        <DialogItem key={el.id} name={el.name} id={el.id} />
    ));

    let messagesElements: JSX.Element[] = props.dialogsPage.messageData.map((el, index) => (
        <Message key={index} message={el.message} />
    ));

    const newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const sendMessage = (): void => {
        props.sendMessage()
    };

    const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        if(newMessageElement.current){
        let messageText = newMessageElement.current?.value;
        props.updateNewMessageText(messageText)
    }};

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div className={classes.sendMessageWrapper}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
};
