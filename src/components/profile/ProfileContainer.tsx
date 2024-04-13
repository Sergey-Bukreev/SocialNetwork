import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getUserProfile,
    getUserStatus,
    savePhoto,
    updateUserStatus
} from "../../redux/profile-reducer/profileReducer";
import {RotState} from "../../redux/Redux-Store";
import { withRouter} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getProfile, getStatus} from "../../redux/selectors/profile-selectors";
import {getAuthorizedUserID, getIsAuth} from "../../redux/selectors/auth-seletor";


 class ProfileContainer extends React.Component<any, any> {

    refreshProfile () {
        let userId = this.props.match.params.userId

        if(!userId) {userId = this.props.authorizedUserID }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
     componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {

        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

     render () {

        return (
            <div >
               <Profile dispatch={this.props.dispatch} profile={this.props.profile}
                        status={this.props.status} updateStatus={this.props.updateUserStatus}
                        isOwner = {!this.props.match.params.userId}
                        savePhoto={this.props.savePhoto}
               />
            </div>
        );
    }

}
let mapStateToProps = (state:RotState) => {
 return {
     profile: getProfile(state),
     isAuth: getIsAuth(state),
     status:getStatus(state),
     authorizedUserID: getAuthorizedUserID(state)

 }
}


export default compose<React.ComponentType> ( connect (mapStateToProps,{getUserProfile, addPost, getUserStatus, updateUserStatus, savePhoto}),
                                             withRouter,
                                            AuthRedirect
                                            ) (ProfileContainer)