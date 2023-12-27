import React from 'react';
import { Action } from "redux";
import {addPostActionCreator, ProfileState, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";


export type MyPostsContainerPropsType = {
    dispatch: (action: Action) => void;
    profilePage:ProfileState
};

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props: MyPostsContainerPropsType) => {
    let addPost = (): void => {props.dispatch(addPostActionCreator())}
    let onPostChange = (text:string): void => {let action = updateNewPostTextActionCreator(text); props.dispatch(action)};

return  <MyPosts updateNewPostText={onPostChange} addPost={addPost} profilePage={props.profilePage}/>
};
