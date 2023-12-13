import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostPropsType} from "./myPosts/Post/Post";



export type ProfilePropsType = {
    posts :Array<PostPropsType>
    addPost:(postMessage:string)=>void



}
export const Profile:React.FC<ProfilePropsType> = (props:ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts postsData={props.posts} addPost={props.addPost}   />
        </div>

    );
};

