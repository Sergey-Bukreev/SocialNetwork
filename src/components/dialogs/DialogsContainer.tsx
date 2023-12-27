import React from 'react';
import {Action} from "redux";
import {DialogState, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    dialogsPage:DialogState
    dispatch: (action: Action) => void;

};

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props: DialogsContainerPropsType) => {
    const sendMessage = (): void => {props.dispatch(sendMessageActionCreator())};
    const onMessageChange = (messageText:string): void => {props.dispatch(updateNewMessageTextActionCreator(messageText))};

    return (<Dialogs  updateNewMessageText={onMessageChange} sendMessage={sendMessage} dialogsPage={props.dialogsPage}/>);
};
