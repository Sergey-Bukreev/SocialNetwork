import {RotState} from "../Redux-Store";

export const getIsAuth = (state:RotState) => {
    return state.auth.isAuth
}
export const getAuthorizedUserID = (state:RotState) => {
    return state.auth.userId
}
export const getCaptchaUrl = (state:RotState) => {
    return state.auth.captchaUrl
}