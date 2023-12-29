import { RotState, store } from '../../redux/Redux-Store';
import {followActionCreator, IUsers, setUsersActionCreator, unfollowActionCreator,} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import {Users} from "./Users"
import {Action, Dispatch} from "redux";

const mapStateToProps = (state: RotState) => {return { usersPage: state.usersPage };};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users: IUsers[]) => {
            dispatch(setUsersActionCreator(users));
        },
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
