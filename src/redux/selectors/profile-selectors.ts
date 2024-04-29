import {RotState} from "../Redux-Store";

export const getProfile = (state:RotState) => {
    return state.profilePage.profile
}
export const getStatus = (state:RotState) => {
    return state.profilePage.status
}
export const getProfilePage = (state:RotState)=> {
    return state.profilePage
}
export const getAccountPhoto = (state:RotState) => {
    return state.profilePage.profile?.photos.large
}
export const getFullUserName = (state:RotState) => {
    return state.profilePage.profile?.fullName
}