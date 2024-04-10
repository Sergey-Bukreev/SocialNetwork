import { Action, Dispatch } from "redux";
import { AuthAPI } from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {RotState} from "../Redux-Store";
import {stopSubmit} from "redux-form";
export type SetAuthUserDataAction = { type: "SET-USER-DATA"; data: UserDataType };
export type UserDataType = { userId: number | null; email: string | null; login: string | null; isAuth: boolean };
export type ActionAuthReducerType = SetAuthUserDataAction;

export type AuthThunkAction = ThunkAction<void, RotState, undefined, Action>
let initialState: UserDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataAction => ({
    type: "SET-USER-DATA",
    data: { userId, email, login, isAuth },
});

export const getAuthUserdata = () => async (dispatch: Dispatch<Action>) => {
      let response = await AuthAPI.me()
        const { id, email, login } = response.data.data;

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true));
            }
    };


export const login = (email: string, password: string, rememberMe: boolean):AuthThunkAction  => async (dispatch) => {
       let response =  await AuthAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserdata());
            } else {dispatch(stopSubmit("login", {_error:"some error"}))}

    };


export const logout = () => async (dispatch: Dispatch<Action>) => {
      let response = await  AuthAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    };


export const authReducer = (authState:UserDataType = initialState, action: ActionAuthReducerType): UserDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return { ...authState, ...action.data };
        default:
            return authState;
    }
};
