import React from 'react';
import {Action} from "redux";
import {DialogState, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsContainerPropsType = {
    dialogsPage:DialogState
    dispatch: (action: Action) => void;

};

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props: DialogsContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const sendMessage = (): void => {store.dispatch(sendMessageActionCreator())};
                const onMessageChange = (messageText:string): void => {store.dispatch(updateNewMessageTextActionCreator(messageText))};

                return (
                    <div>
                        <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessage} dialogsPage={store.getState().dialogPage}/>

                    </div>
                );
            }}
        </StoreContext.Consumer>
    );
};
