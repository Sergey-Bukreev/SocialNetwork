import {DialogState, sendMessageActionCreator, dialogReducer, SendMessageAction, updateNewMessageTextActionCreator, NewMessageTextAction} from "./dialogReducer";

test("sending a message should modify the dialog state", () => {
    const startState: DialogState = {
        dialogsData: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Sveta" },
            { id: 3, name: "Sergio" },
            { id: 4, name: "Alisa" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Valera" },
        ],
        messageData: [
            { id: 1, message: "Nice to meet you" },
            { id: 2, message: "Hello" },
            { id: 3, message: "How are you" },
            { id: 4, message: "IT-Incubator" },
        ],
        newMessageText: "Write your message",
    };


    const sendMessageAction:SendMessageAction = sendMessageActionCreator();
    const endState:DialogState = dialogReducer(startState, sendMessageAction);

    expect(endState.messageData).toHaveLength(startState.messageData.length + 1);
    expect(endState.newMessageText).toEqual("");
});

test("updating new message text should change the newMessageText property", ()=> {
    const startState: DialogState = {
        dialogsData: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Sveta" },
            { id: 3, name: "Sergio" },
            { id: 4, name: "Alisa" },
            { id: 5, name: "Victor" },
            { id: 6, name: "Valera" },
        ],
        messageData: [
            { id: 1, message: "Nice to meet you" },
            { id: 2, message: "Hello" },
            { id: 3, message: "How are you" },
            { id: 4, message: "IT-Incubator" },
        ],
        newMessageText: "Write your message",
    };

    const newText:string = "Hellow its new Message Text"
    const updateNewMessageTextAction:NewMessageTextAction = updateNewMessageTextActionCreator(newText)
    const endState:DialogState = dialogReducer(startState, updateNewMessageTextAction)

    expect(startState).not.toEqual(endState)
    expect(startState.newMessageText).toBe("Write your message")
    expect(endState.newMessageText).toBe("Hellow its new Message Text")
    expect(endState.messageData).toEqual(startState.messageData);
    expect(endState.dialogsData).toEqual(startState.dialogsData);
})
