import {Action, Dispatch} from "redux";
import {ProfileAPI} from "../../api/api";
import {RotState} from "../Redux-Store";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

export type NewPostTextAction = { type: 'UPDATE-NEW-POST-TEXT', newText: string }
export type AddPostAction = { type: "ADD-POST", postBody:string }
export type SetUserProfileAction = {type:"SET-USER-PROFILE", profile:ProfileState}
export type SetUserStatusAction = {type:"SET-USER-STATUS", status:string}
export type SavePhotoSaccess = {type:"SAVE_PHOTO_SACCESS", photos:UserPhotosType}
export type ProfileAction = NewPostTextAction | AddPostAction | SetUserProfileAction | SetUserStatusAction | SavePhotoSaccess
export type ProfileThunkAction = ThunkAction<void, RotState, undefined, Action>
export interface IPost {id: number;message: string;likeCount: number;}
export type ProfileState = {
    postsData: IPost[];
    profile:UserProfileType | null
    status:string
}
export type UserProfileType = {
    fullName: string | null
    aboutMe:string | null
    userId:number | null
    lookingForAJob: boolean
    lookingForAJobDescription:string | null,
    contacts: ContactsType
    photos: UserPhotosType
    followed:boolean
}

export type ContactsType = {
    [key: string]: string | null
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
export const savePhotoSuccess = (photos:UserPhotosType) => {return {type:"SAVE_PHOTO_SACCESS", photos} as const}

export const getUserProfile = (userId:number)=> async (dispatch: Dispatch<Action>) => {
       let response = await ProfileAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId:number)=> async (dispatch: Dispatch<Action>) => {
       let response = await ProfileAPI.getStatus(userId)
            dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (statusText:string)=> async (dispatch: Dispatch<Action>) => {
       let response = await ProfileAPI.updateStatus(statusText)
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(statusText))
            }
}
export const savePhoto = (file:File) => async (dispatch: Dispatch<Action>, userId:number) => {
    let response = await ProfileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))

    }

}
export const saveProfile = (profile:UserProfileType):ProfileThunkAction => async (dispatch, getState:()=> RotState) => {
const userId = getState().auth.userId
    let response = await ProfileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
       if(userId) {
           dispatch(getUserProfile(userId))
       }

    }
    else {
        dispatch(stopSubmit("edit profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
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
        case "SAVE_PHOTO_SACCESS":
            return {...profileState, profile:profileState.profile?{...profileState.profile , photos:action.photos}: initialState.profile}

        default:
            return updateProfileState;
    }

    return updateProfileState;
};
