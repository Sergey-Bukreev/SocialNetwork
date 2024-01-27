export type NewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type AddPostAction = { type: "ADD-POST" }
export type SetUserProfileAction = {type:"SET-USER-PROFILE", profile:ProfileState}
export type ProfileAction = NewPostTextAction | AddPostAction | SetUserProfileAction
export interface IPost {id: number;message: string;likeCount: number;}
export type ProfileState = {
    postsData: IPost[];
    newPostText: string;
    profile:UserProfileType | null
}
export type UserProfileType = {
    fullName: string | null
    aboutMe:string | null
    id:number | null
    lookingForAJob: boolean
    photos: UserPhotosType
    followed:boolean
}
export type UserPhotosType = {
    small:string | null
    large:string | null
}
 export let initialState: ProfileState = {
     postsData: [
         {id: 1, message: "Hi, how are you", likeCount: 15},
         {id: 2, message: "Its my first post", likeCount: 25},
         {id: 3, message: "Have a good Time", likeCount: 22},

     ],
     newPostText: "Hello",
     profile:null
}
export  const addPost = ():AddPostAction=> {return {type:"ADD-POST"} as const}
export  const updateNewPostText = (text:string):NewPostTextAction=> {return {type:"UPDATE-NEW-POST-TEXT", newText:text} as const}
export const setUserProfile = (profile:any)=> {return {type:"SET-USER-PROFILE", profile} as const}
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
        case "SET-USER-PROFILE":
            return { ...profileState, profile: { ...profileState.profile, ...action.profile } } as ProfileState;
        default:
            return updateProfileState;
    }

    return updateProfileState;
};
