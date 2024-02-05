import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {addPost, getUserProfile, updateNewPostText} from "../../redux/profileReducer";
import {RotState} from "../../redux/Redux-Store";
import { withRouter} from "react-router-dom";
import {AuthRedirect} from "../../hoc/AuthRedirect";


export class ProfileContainerComponent extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {userId = 2}
        this.props.getUserProfile(userId)
    }

    render () {

        return (
            <div >
               <Profile dispatch={this.props.dispatch} profile={this.props.profile}  />
            </div>

        );
    }

}
let mapStateToProps = (state:RotState) => {
 return {profile: state.profilePage.profile, isAuth: state.auth.isAuth}
}
let AuthRedirectComponent =AuthRedirect(ProfileContainerComponent)
const WithUrlDataProfileContainerComponent = withRouter(AuthRedirectComponent)
export const ProfileContainer = connect (mapStateToProps,{getUserProfile, addPost, updateNewPostText}) (WithUrlDataProfileContainerComponent)

