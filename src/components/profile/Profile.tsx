import React from 'react';
import classes from "./Profile.module.css"
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Action} from "redux"

import {MyPostsContainer} from "./myPosts/MyPostsContainer";



export type ProfilePropsType = { dispatch:(action: Action) => void, profile:any }
export const Profile:React.FC<ProfilePropsType> = (props:ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    );
};

