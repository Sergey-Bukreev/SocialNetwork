import { RotState,  } from '../../redux/Redux-Store';
import {
    follow,
    setCurrentPage, setToggleFollowInProgress,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersState,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import { UsersAPI} from "../../api/api";

export type MapStateToPropsType = {
    usersPage:UsersState
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean
    followInProgress:number[]



}
export class UsersContainerComponent extends React.Component<any, any> {

    componentDidMount() {
       this.props.setToggleIsFetching(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(data.items)
        })

    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        usersData={this.props.usersPage.usersData}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           followInProgress ={this.props.followInProgress}
                           setToggleFollowInProgress={this.props.setToggleFollowInProgress}

                    />
                </>

    }

}
const mapStateToProps = (state: RotState):MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress:state.usersPage.followInProgress



    };
};



export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setToggleFollowInProgress} )(UsersContainerComponent);
