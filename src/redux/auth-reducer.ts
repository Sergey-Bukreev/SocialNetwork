import { Action, Dispatch } from "redux";
import { AuthAPI } from "../api/api";

export type SetAuthUserDataAction = { type: "SET-USER-DATA"; data: UserDataType };
export type UserDataType = { userId: number | null; email: string | null; login: string | null; isAuth: boolean };
export type ActionAuthReducerType = SetAuthUserDataAction;

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

export const getAuthUserdata = () => {
    return (dispatch: Dispatch<Action>) => {
        AuthAPI.me().then((response) => {
            const { id, email, login } = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        AuthAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));

            }
        });
    };
};

export const logout = () => {
    return (dispatch: Dispatch<Action>) => {
        AuthAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    };
};

export const authReducer = (authState:UserDataType = initialState, action: ActionAuthReducerType): UserDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return { ...authState, ...action.data };
        default:
            return authState;
    }
};
