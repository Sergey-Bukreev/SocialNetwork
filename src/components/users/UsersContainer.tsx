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
import React from "react";
import axios from "axios";
import {Users} from "./Users";
export type MapStateToPropsType = {
    usersPage:UsersState
    pageSize:number
    totalUserCount:number
    currentPage:number
}
export class UsersContainerComponent extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersPage.usersData}
        />

    }

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);
