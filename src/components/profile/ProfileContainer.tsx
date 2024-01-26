import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/profileReducer";
import {RotState} from "../../redux/Redux-Store";

export class ProfileContainerComponent extends React.Component<any, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)

        })
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
 return {
     profile: state.profilePage.profile
 }
}
export const ProfileContainer = connect (mapStateToProps,{setUserProfile, addPost, updateNewPostText}) (ProfileContainerComponent)

