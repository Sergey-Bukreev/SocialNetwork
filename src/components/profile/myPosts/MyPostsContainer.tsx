

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

import {RotState, store} from "../../../redux/Redux-Store";

import {MyPosts} from "./MyPosts";





let mapStateToProps = (state:RotState)=> {
    return {profilePage: state.profilePage}
}
let mapDispatchToProps = ()=> {
    return {updateNewPostText:(text:string)=>{store.dispatch(updateNewPostTextActionCreator(text))}, addPost:()=> {store.dispatch(addPostActionCreator())}}
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)