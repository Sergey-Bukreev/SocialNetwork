
export type SendMessageAction = {type:"SEND-MESSAGE", messageBody:string}

export type DialogAction = SendMessageAction
export type DialogState = {
    dialogsData: { id: number; name: string }[];
    messageData: { id: number; message: string }[];

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

}
export const sendMessage = (messageBody:string):SendMessageAction => {return {type:"SEND-MESSAGE", messageBody}}
export const dialogReducer = (dialogState: DialogState = initialState, action: DialogAction): DialogState => {
    let updateDialogState = { ...dialogState };

    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage: { id: number; message: string } = { id: 5, message: action.messageBody };
            updateDialogState.messageData = [...dialogState.messageData, newMessage];
            break;
        default:
            return updateDialogState;
    }

    return updateDialogState;
};