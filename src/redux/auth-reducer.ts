import {Action, Dispatch} from "redux";
import {AuthAPI} from "../api/api";

export type SetAuthUserDataAction = {type: "SET-USER-DATA", data: Omit<UserDataType, 'isAuth'>}
export type UserDataType = {userId:number | null, email:string | null, login:string | null, isAuth: boolean}
export  type ActionAuthReducerType = SetAuthUserDataAction
let initialState:UserDataType = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}
export const setAuthUserData = (userId:number, email:string, login:string):SetAuthUserDataAction => ({type:"SET-USER-DATA", data:{userId, email, login}} as const)
export const getAuthUserdata = () => {
    return (dispatch:Dispatch<Action>)=> {
        AuthAPI.me().then(response => {
            let {id, email, login} = response.data.data
            if(response.data.resultCode === 0) {dispatch(setAuthUserData(id, email, login))}
        })
    }
}

export const authReducer = (authState = initialState, action:ActionAuthReducerType):UserDataType=> {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...authState, ...action.data, isAuth:true}

        default:
            return authState;
    }

};