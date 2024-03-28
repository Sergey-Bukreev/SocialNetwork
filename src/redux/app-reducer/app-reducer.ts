import { AnyAction} from "redux";
import { getAuthUserdata} from "../auth-reducer/auth-reducer";
import { ThunkDispatch} from "redux-thunk";
import {RotState} from "../Redux-Store";


export type InitializedSuccessActionType = {type:"INITIALIZED-SUCCESS"}
export type ActionType = InitializedSuccessActionType
export type AppInitialStateType = { initialized: boolean }
let  initialState:AppInitialStateType = {
    initialized: false
}

export const initializedSuccess = () => { return {type:"INITIALIZED-SUCCESS"} as const}
export const initializeAPP= () => {
     return (dispatch:ThunkDispatch<RotState,void,AnyAction>)=> {
        let dispatchResult = dispatch(getAuthUserdata())
        Promise.all([dispatchResult])
         .then(()=>{
             dispatch(initializedSuccess())
         })

     }
}
export const appReducer = (state:AppInitialStateType = initialState, action:ActionType)  => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS": return {...state, initialized: true}
        default:
            return state
    }
}