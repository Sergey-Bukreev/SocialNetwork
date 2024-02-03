import React from 'react';
import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./Message/Message";
import classes from "./Dialogs.module.css";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements: JSX.Element[] = props.dialogPage.dialogsData.map((el) => (
        <DialogItem key={el.id} name={el.name} id={el.id} />
    ));

    let messagesElements: JSX.Element[] = props.dialogPage.messageData.map((el, index) => (
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

    if (!props.isAuth ) return  <Redirect to={"/login"}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div className={classes.sendMessageWrapper}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogPage.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
};
