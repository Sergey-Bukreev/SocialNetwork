import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostPropsType} from "./myPosts/Post/Post";
import {Action} from "../../redux/State";



export type ProfilePropsType = {
    posts :Array<PostPropsType>
    dispatch:(action: Action) => void
    newPostText:string


}
export const Profile:React.FC<ProfilePropsType> = (props:ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postsData={props.posts} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>

    );
};

