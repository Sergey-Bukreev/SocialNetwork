import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {addPost, getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {RotState} from "../../redux/Redux-Store";
import { withRouter} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";


 class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        if(!userId) {userId = this.props.authorizedUserID }
        console.log(userId)
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render () {

        return (
            <div >
               <Profile dispatch={this.props.dispatch} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus} />
            </div>
        );
    }

}
let mapStateToProps = (state:RotState) => {
 return {
     profile: state.profilePage.profile,
     isAuth: state.auth.isAuth,
     status:state.profilePage.status,
     authorizedUserID: state.auth.userId

 }
}


export default compose<React.ComponentType> ( connect (mapStateToProps,{getUserProfile, addPost, getUserStatus, updateUserStatus}),
                                             withRouter,
                                            AuthRedirect
                                            ) (ProfileContainer)