
import {addPost, ProfileState} from "../../../redux/profile-reducer/profileReducer";
import {connect} from "react-redux";
import {RotState} from "../../../redux/Redux-Store";
import {MyPosts} from "./MyPosts";
import {getProfilePage} from "../../../redux/selectors/profile-selectors";

export type MapStateToPropsType = {profilePage:ProfileState}
export type MapDispatchToPropsType = {
    addPost:(postBody:string)=>void
}

let mapStateToProps = (state:RotState): MapStateToPropsType => {
    return {profilePage: getProfilePage(state)}
}

export const MyPostsContainer = connect(mapStateToProps, { addPost})(MyPosts)