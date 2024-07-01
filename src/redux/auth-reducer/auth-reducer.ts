import { Action, Dispatch } from "redux";
import {AuthAPI, SecurityAPI, setAuthToken} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {RotState} from "../Redux-Store";
import {stopSubmit} from "redux-form";
export type SetAuthUserDataAction = { type: "SET-USER-DATA"; data: UserDataType };
export type GetCaptchaUrlSuccessActionType = {type:"GET-CAPTCHA-URL-SUCCESS", captchaUrl:string | null}
export type UserDataType = { userId: number | null; email: string | null; login: string | null; isAuth: boolean; captchaUrl:string | null  };
export type ActionAuthReducerType = SetAuthUserDataAction | GetCaptchaUrlSuccessActionType ;

export type AuthThunkAction = ThunkAction<void, RotState, undefined, Action>
let initialState: UserDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl : null// if null then captcha is not required
};


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null): SetAuthUserDataAction => ({
    type: "SET-USER-DATA",
    data: { userId, email, login, isAuth, captchaUrl },
});
export const getCaptchaUrlSuccess = (captchaUrl:string | null):GetCaptchaUrlSuccessActionType => ({type:"GET-CAPTCHA-URL-SUCCESS", captchaUrl:captchaUrl}) as const

export const getAuthUserdata = () => async (dispatch: Dispatch<Action>) => {
      let response = await AuthAPI.me()
        const { id, email, login, captchaUrl } = response.data.data;

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true, captchaUrl));
            }
    };


export const login = (email: string, password: string, rememberMe: boolean, captcha:string | null):AuthThunkAction  => async (dispatch) => {
       let response =  await AuthAPI.login(email, password, rememberMe, captcha)
            if (response.data.resultCode === 0) {
                const token = response.data.data.token
                localStorage.setItem('token', token);
                setAuthToken(token)
                dispatch(getAuthUserdata());
            } else {
                if(response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                dispatch(stopSubmit("login", {_error:response.data.messages[0]}))
            }

    };


export const logout = () => async (dispatch: Dispatch<Action>) => {
      let response = await  AuthAPI.logout()
            if (response.data.resultCode === 0) {
                setAuthToken(null)
                localStorage.removeItem('token')
                dispatch(setAuthUserData(null, null, null, false, null));

            }
    };

export const getCaptchaUrl = () => async (dispatch:Dispatch<Action>) => {
    let  response = await SecurityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const authReducer = (authState:UserDataType = initialState, action: ActionAuthReducerType): UserDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return { ...authState, ...action.data };
        case "GET-CAPTCHA-URL-SUCCESS":
            return {...authState, captchaUrl:action.captchaUrl}
        default:
            return authState;
    }
};
