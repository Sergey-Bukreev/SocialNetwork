import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";

let reducersButch = combineReducers({profilePage:profileReducer, dialogPage:dialogReducer})
export let store = createStore(reducersButch)

export type RotState = ReturnType<typeof store.getState>
