
import {addPost, ProfileState} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {RotState} from "../../../redux/Redux-Store";
import {MyPosts} from "./MyPosts";

export type MapStateToPropsType = {profilePage:ProfileState}
export type MapDispatchToPropsType = {
    addPost:(postBody:string)=>void
}

let mapStateToProps = (state:RotState): MapStateToPropsType => {
    return {profilePage: state.profilePage}
}

export const MyPostsContainer = connect(mapStateToProps, { addPost})(MyPosts)