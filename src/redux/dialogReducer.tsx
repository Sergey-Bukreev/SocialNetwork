
export type SendMessageAction = {type:"SEND-MESSAGE"}
export type NewMessageTextAction = {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:string}
export type DialogAction = SendMessageAction | NewMessageTextAction
export type DialogState = {
    dialogsData: { id: number; name: string }[];
    messageData: { id: number; message: string }[];
    newMessageText:string
}
const initialState:DialogState = {
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Sergio"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ],
    messageData: [
        {id: 1, message: "Nice to meet you"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you"},
        {id: 4, message: "IT-Incubator"},
    ],
    newMessageText: "Write your message",
}
export const sendMessageActionCreator = ():SendMessageAction => {return {type:"SEND-MESSAGE"}}
export  const updateNewMessageTextActionCreator = (messageText:string):NewMessageTextAction => {return {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:messageText}}
export const dialogReducer = (dialogState: DialogState = initialState, action: DialogAction): DialogState => {
    let updateDialogState = { ...dialogState };

    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage: { id: number; message: string } = { id: 5, message: dialogState.newMessageText };
            updateDialogState.messageData = [...dialogState.messageData, newMessage];
            updateDialogState.newMessageText = "";
            break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            updateDialogState.newMessageText = action.newMessage;
            break;
        default:
            return updateDialogState;
    }

    return updateDialogState;
};