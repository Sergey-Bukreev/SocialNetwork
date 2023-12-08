import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
export const Profile:React.FC = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts />
        </div>

    );
};

