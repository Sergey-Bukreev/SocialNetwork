import React from 'react';
import classes from "./Profile.module.css"
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {Action} from "redux"
import { ProfileState} from "../../redux/profileReducer";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";



export type ProfilePropsType = { dispatch:(action: Action) => void, profilePage:ProfileState }
export const Profile:React.FC<ProfilePropsType> = (props:ProfilePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>

    );
};

