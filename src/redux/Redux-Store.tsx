import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";

let reducersButch = combineReducers({profilePage:profileReducer, dialogPage:dialogReducer, usersPage:usersReducer, auth:authReducer})
export let store = createStore(reducersButch)

export type RotState = ReturnType<typeof store.getState>
