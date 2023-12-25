import React from 'react';
import { DialogItem, DialogItemPropsType } from "./dialogItem/DialogItem";
import { Message, MessagePropsType } from "./Message/Message";
import classes from "./Dialogs.module.css";
import {Action, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/State";

type DialogsPropsType = {
    dialogData: Array<DialogItemPropsType>;
    messageData: Array<MessagePropsType>;
    dispatch: (action: Action) => void;
    newMessageText: string;
};

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements: JSX.Element[] = props.dialogData.map((el) => (
        <DialogItem key={el.id} name={el.name} id={el.id} />
    ));

    let messagesElements: JSX.Element[] = props.messageData.map((el, index) => (
        <Message key={index} message={el.message} />
    ));

    const newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const sendMessage = (): void => {
        let messageText = newMessageElement.current?.value;
        if (messageText) {
            props.dispatch(sendMessageActionCreator());
        }
    };

    const onMessageChange = (): void => {
        let messageText = newMessageElement.current?.value;
        if (messageText) {
            props.dispatch(updateNewMessageTextActionCreator(messageText));
        }
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div className={classes.sendMessageWrapper}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    );
};
