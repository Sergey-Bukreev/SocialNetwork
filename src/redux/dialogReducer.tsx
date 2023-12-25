
export type SendMessageAction = {type:"SEND-MESSAGE"}
export type NewMessageTextAction = {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:string}
export type DialogAction = SendMessageAction | NewMessageTextAction
export type DialogState = {
    dialogsData: { id: number; name: string }[];
    messageData: { id: number; message: string }[];
    newMessageText:string
}
const initialState:DialogState = {
    dialogsData: [],
    messageData: [],
    newMessageText: "",
}

export const dialogReducer = (dialogState:DialogState=initialState, action:DialogAction):DialogState=> {

    if(action.type === "SEND-MESSAGE")
    {let newMessage:{id:number, message:string}= {id:5, message: dialogState.newMessageText}
        dialogState.messageData.push(newMessage)
        dialogState.newMessageText = ""
        }

    else if(action.type === "UPDATE-NEW-MESSAGE-TEXT")
    { dialogState.newMessageText= action.newMessage;

}

    return dialogState
}