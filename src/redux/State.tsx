export type newPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type addPostAction = { type: "ADD-POST" }
export type sendMessageAction = {type:"SEND-MESSAGE"}
export type newMessageTextAction = {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:string}
export type anotherActionType = { type: "Another-Action", anotherKey: string }
export type Action = newPostTextAction | anotherActionType | addPostAction | sendMessageAction | newMessageTextAction
interface Post {id: number;message: string;likeCount: number;}
interface State {
    dialogsData: { id: number; name: string }[];
    messageData: { id: number; message: string }[];
    postsData: Post[];
    newPostText: string;
    newMessageText:string
}

interface Store {
    _state: State;
    getState(): State;
    _callSubscriber:(state: State)=> void;
    subscribe:(observer: (state: State) => void)=> void;
    dispatch:(action: Action) => void;
}


let store:Store = {
     _state : {
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
        postsData: [
            {id: 1, message: "Hi, how are you", likeCount: 15},
            {id: 2, message: "Its my first post", likeCount: 25},
            {id: 3, message: "Have a good Time", likeCount: 22},

        ],
        newPostText: "Hello"

    },
    getState () {return this._state},
    _callSubscriber (state:any) {
        console.log("state change")
    },
    subscribe  (observer:(state:any)=>void)  {
        this._callSubscriber = observer
    },


    dispatch (action:Action) {
         if(action.type === "ADD-POST")
         {let newPost:{id:number, message:string, likeCount:number} = {
             id: 5,
             message: this._state.newPostText,
             likeCount: 0
         }
             this._state.postsData.push(newPost)
             this._state.newPostText = ""
             this._callSubscriber(this._state)}

         else if(action.type === "UPDATE-NEW-POST-TEXT")
         { this._state.newPostText= action.newText;
             this._callSubscriber(this._state)}

         else if(action.type === "SEND-MESSAGE")
         {let newMessage:{id:number, message:string}= {id:5, message: this._state.newMessageText}
             this._state.messageData.push(newMessage)
             this._state.newMessageText = ""
             this._callSubscriber(this._state)}

         else if(action.type === "UPDATE-NEW-MESSAGE-TEXT")
         { this._state.newMessageText= action.newMessage;
             this._callSubscriber(this._state)}
    }

}
export  const addPostActionCreator = ():addPostAction=> {return {type:"ADD-POST"}}
export  const updateNewPostTextActionCreator = (text:string):newPostTextAction=> {return {type:"UPDATE-NEW-POST-TEXT", newText:text}}
export const sendMessageActionCreator = ():sendMessageAction => {return {type:"SEND-MESSAGE"}}
export  const updateNewMessageTextActionCreator = (messageText:string):newMessageTextAction => {return {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:messageText}}
export default  store





