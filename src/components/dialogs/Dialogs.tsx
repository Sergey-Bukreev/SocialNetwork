import React from 'react';
import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./Message/Message";
import classes from "./Dialogs.module.css";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DialogsContainer";
import {AddMessaageFormRedux,  FormDataMessage} from "./MessageForm";


type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

export const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {
    let dialogsElements: JSX.Element[] = props.dialogPage.dialogsData.map((el) => (
        <DialogItem key={el.id} name={el.name} id={el.id} />
    ));
    let messagesElements: JSX.Element[] = props.dialogPage.messageData.map((el, index) => (
        <Message key={index} message={el.message} />
    ));
    const addMessage = (values: FormDataMessage) => {
        props.sendMessage(values.messageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div className={classes.sendMessageWrapper}>
                <AddMessaageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
};
