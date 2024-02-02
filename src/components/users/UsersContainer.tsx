import { RotState,  } from '../../redux/Redux-Store';
import {
    acceptFollow, getUsers,
    setCurrentPage, setToggleFollowInProgress,
    acceptUnfollow,
    UsersState, follow, unfollow,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users totalUserCount={this.props.totalUserCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           usersData={this.props.usersPage.usersData}
                           followInProgress ={this.props.followInProgress}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}

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



export const UsersContainer = connect(mapStateToProps, { setCurrentPage, setToggleFollowInProgress, getUsers, follow, unfollow} )(UsersContainerComponent);
