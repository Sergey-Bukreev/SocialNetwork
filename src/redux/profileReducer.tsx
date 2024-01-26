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
export  const addPost = ():AddPostAction=> {return {type:"ADD-POST"}}
export  const updateNewPostText = (text:string):NewPostTextAction=> {return {type:"UPDATE-NEW-POST-TEXT", newText:text}}
export const profileReducer = (profileState: ProfileState = initialState, action: ProfileAction): ProfileState => {
    let updateProfileState = { ...profileState };

    switch (action.type) {
        case "ADD-POST":
            let newPost: IPost = {
                id: 5,
                message: profileState.newPostText,
                likeCount: 0
            };

            updateProfileState.postsData = [...profileState.postsData, newPost];
            updateProfileState.newPostText = "";
            break;
        case "UPDATE-NEW-POST-TEXT":
            updateProfileState.newPostText = action.newText;
            break;
        default:
            return updateProfileState;
    }

    return updateProfileState;
};
