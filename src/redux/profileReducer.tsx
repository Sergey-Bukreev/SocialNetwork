import {Action, Dispatch} from "redux";
import {ProfileAPI} from "../api/api";

export type NewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type AddPostAction = { type: "ADD-POST", postBody:string }
export type SetUserProfileAction = {type:"SET-USER-PROFILE", profile:ProfileState}
export type SetUserStatusAction = {type:"SET-USER-STATUS", status:string}
export type ProfileAction = NewPostTextAction | AddPostAction | SetUserProfileAction | SetUserStatusAction
export interface IPost {id: number;message: string;likeCount: number;}
export type ProfileState = {
    postsData: IPost[];
    profile:UserProfileType | null
    status:string
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

     profile:null,
     status:""

}
export  const addPost = (postBody:string):AddPostAction=> {return {type:"ADD-POST", postBody} as const}
export const setUserProfile = (profile:any)=> {return {type:"SET-USER-PROFILE", profile} as const}
export const setUserStatus = (status:string) =>{return {type:"SET-USER-STATUS", status} as const}
export const getUserProfile = (userId:number)=> {
    return (dispatch: Dispatch<Action>) => {
        ProfileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))

        })
    }
}
export const getUserStatus = (userId:number)=> {
    return (dispatch: Dispatch<Action>) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))

        })
    }
}
export const updateUserStatus = (statusText:string)=> {
    return (dispatch: Dispatch<Action>) => {
        ProfileAPI.updateStatus(statusText).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(statusText))
            }
        })
    }
}

export const profileReducer = (profileState: ProfileState = initialState, action: ProfileAction): ProfileState => {
    let updateProfileState = { ...profileState };

    switch (action.type) {
        case "ADD-POST":
            let newPost: IPost = {
                id: 5,
                message: action.postBody,
                likeCount: 0
            };
            updateProfileState.postsData = [ newPost, ...profileState.postsData];
            break;
        case "SET-USER-PROFILE":
            return { ...profileState, profile: { ...profileState.profile, ...action.profile } } as ProfileState;
        case "SET-USER-STATUS":
            return {...profileState, status: action.status } as ProfileState
        default:
            return updateProfileState;
    }

    return updateProfileState;
};
