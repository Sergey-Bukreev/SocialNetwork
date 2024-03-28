import { RotState,  } from '../../redux/Redux-Store';
import {getUsers, setCurrentPage, setToggleFollowInProgress, UsersState, follow, unfollow} from '../../redux/users-reducer/usersReducer';
import { connect } from 'react-redux';
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {
    getCurrentPage, getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redux/selectors/users-selecctors";


export type MapStateToPropsType = {
    usersPage:UsersState
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean
    followInProgress:number[]
}
 class UsersContainer extends React.Component<any, any> {

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
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress:getFollowInProgress(state)
    };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { setCurrentPage, setToggleFollowInProgress, getUsers, follow, unfollow} ), AuthRedirect)(UsersContainer)