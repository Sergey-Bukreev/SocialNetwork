
import {addPost, ProfileState, updateNewPostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {RotState, store} from "../../../redux/Redux-Store";
import {MyPosts} from "./MyPosts";

export type MapStateToPropsType = {profilePage:ProfileState}
export type MapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

let mapStateToProps = (state:RotState): MapStateToPropsType => {
    return {profilePage: state.profilePage}
}

export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)