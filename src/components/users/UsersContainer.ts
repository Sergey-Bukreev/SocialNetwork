import { RotState, store } from '../../redux/Redux-Store';
import {
    followActionCreator,
    IUsers,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UsersState,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import {Action, Dispatch} from "redux";
import {Users} from "./Users";
export type MapStateToPropsType = {
    usersPage:UsersState
    pageSize:number
    totalUserCount:number
    currentPage:number
}
const mapStateToProps = (state: RotState):MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    };
};

export type MapDispatchToPropsType = {
    follow: (userId: number) => void

    unfollow: (userId: number) => void

    setUsers: (users: IUsers[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalCount:number)=> void
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
        setCurrentPage: (pageNumber:number)=> {
           store.dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount:number)=> {
            store.dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
