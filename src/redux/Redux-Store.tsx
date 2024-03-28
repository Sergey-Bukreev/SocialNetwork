import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer/profileReducer";
import {dialogReducer} from "./dialog-reducer/dialogReducer";
import {usersReducer} from "./users-reducer/usersReducer";
import {authReducer} from "./auth-reducer/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer/app-reducer";
let reducersButch = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})
export let store = createStore(reducersButch, applyMiddleware(thunkMiddleware))

export type RotState = ReturnType<typeof store.getState>
