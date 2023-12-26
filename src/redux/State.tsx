// import {AddPostAction, NewPostTextAction, ProfileAction, profileReducer, ProfileState} from "./profileReducer";
// import {DialogAction, dialogReducer, DialogState, NewMessageTextAction, SendMessageAction} from "./dialogReducer";
//
//
// export type anotherActionType = { type: "Another-Action", anotherKey: string }
// export type Action = ProfileAction | DialogAction | anotherActionType
//
// export interface State {profileState: ProfileState , dialogState: DialogState}
//
// interface Store {
//     _state: State;
//     getState(): State;
//     _callSubscriber:(state: State)=> void;
//     subscribe:(observer: (state: State) => void)=> void;
//     dispatch:(action: Action) => void;
// }
//
//
// export const store:Store = {
//      _state : {
//          profileState: {
//              postsData: [
//                  {id: 1, message: "Hi, how are you", likeCount: 15},
//                  {id: 2, message: "Its my first post", likeCount: 25},
//                  {id: 3, message: "Have a good Time", likeCount: 22},
//
//              ],
//              newPostText: "Hello",
//          },
//          dialogState: {
//              dialogsData: [
//                  {id: 1, name: "Dimych"},
//                  {id: 2, name: "Sveta"},
//                  {id: 3, name: "Sergio"},
//                  {id: 4, name: "Alisa"},
//                  {id: 5, name: "Victor"},
//                  {id: 6, name: "Valera"}
//              ],
//              messageData: [
//                  {id: 1, message: "Nice to meet you"},
//                  {id: 2, message: "Hello"},
//                  {id: 3, message: "How are you"},
//                  {id: 4, message: "IT-Incubator"},
//              ],
//              newMessageText: "Write your message",
//          }
//      },
//     getState () {return this._state},
//     _callSubscriber (state:any) {
//         console.log("state change")
//     },
//     subscribe  (observer:(state:any)=>void)  {
//         this._callSubscriber = observer
//     },
//
//
//     dispatch (action:Action) {
//          this._state.profileState = profileReducer(this._state.profileState, action as ProfileAction)
//         this._state.dialogState = dialogReducer(this._state.dialogState, action as DialogAction);
//         this._callSubscriber(this._state)
//
//     }
//
// }
// export  const addPostActionCreator = ():AddPostAction=> {return {type:"ADD-POST"}}
// export  const updateNewPostTextActionCreator = (text:string):NewPostTextAction=> {return {type:"UPDATE-NEW-POST-TEXT", newText:text}}
// export const sendMessageActionCreator = ():SendMessageAction => {return {type:"SEND-MESSAGE"}}
// export  const updateNewMessageTextActionCreator = (messageText:string):NewMessageTextAction => {return {type:"UPDATE-NEW-MESSAGE-TEXT", newMessage:messageText}}
// export default  store
//
//
//
//
//
export {}