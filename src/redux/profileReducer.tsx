export type NewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type AddPostAction = { type: "ADD-POST" }
export type ProfileAction = NewPostTextAction | AddPostAction
export interface IPost {id: number;message: string;likeCount: number;}
export type ProfileState = {
    postsData: IPost[];
    newPostText: string;
}
 export let initialState: ProfileState = {
     postsData: [
         {id: 1, message: "Hi, how are you", likeCount: 15},
         {id: 2, message: "Its my first post", likeCount: 25},
         {id: 3, message: "Have a good Time", likeCount: 22},

     ],
     newPostText: "Hello",
}
export  const addPostActionCreator = ():AddPostAction=> {return {type:"ADD-POST"}}
export  const updateNewPostTextActionCreator = (text:string):NewPostTextAction=> {return {type:"UPDATE-NEW-POST-TEXT", newText:text}}
export const profileReducer = (profileState: ProfileState=initialState, action: ProfileAction):ProfileState => {
    if(action.type === "ADD-POST")
    {
        let newPost:{id:number, message:string, likeCount:number} = {
        id: 5,
        message: profileState.newPostText,
        likeCount: 0
        }
        profileState.postsData.push(newPost)
        profileState.newPostText = ""
    }


    else if(action.type === "UPDATE-NEW-POST-TEXT") {profileState.newPostText = action.newText;}



    return profileState
}
