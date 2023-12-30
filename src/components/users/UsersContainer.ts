import { RotState, store } from '../../redux/Redux-Store';
import {followActionCreator, IUsers, setUsersActionCreator, unfollowActionCreator, UsersState,} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import {Users} from "./Users"
import {Action, Dispatch} from "redux";
export type MapStateToPropsType = {
    usersPage:UsersState
}
const mapStateToProps = (state: RotState):MapStateToPropsType => {return { usersPage: state.usersPage };};
export type MapDispatchToPropsType = {
    follow: (userId: number) => void

    unfollow: (userId: number) => void

    setUsers: (users: IUsers[]) => void
}
const mapDispatchToProps = (dispatch:Dispatch<Action>) : MapDispatchToPropsType=> {
    return {
        follow: (userId: number) => {
            store.dispatch(followActionCreator(userId));
        },
        unfollow: (userId: number) => {
            store.dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users: IUsers[]) => {
            store.dispatch(setUsersActionCreator(users));
        },
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
