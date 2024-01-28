
export type SetAuthUserDataAction = {type: "SET-USER-DATA", data:UserDataType}
export type UserDataType = {userId:number | null, email:string | null, login:string | null, isAuth:boolean}
export  type ActionAuthReducerType = SetAuthUserDataAction
let initialState:UserDataType = {
    userId:null,
    email:null,
    login:null,
    isAuth:false
}
export const setAuthUserData = (userId:number, email:string, login:string, isAuth:boolean):SetAuthUserDataAction => {return{type:"SET-USER-DATA", data:{userId, email, login, isAuth}} as const}
export const authReducer = (authState = initialState, action:ActionAuthReducerType):UserDataType=> {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...authState, ...action.data, isAuth:true}

        default:
            return authState;
    }

};