import React from 'react';
import classes from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
export const Profile:React.FC = () => {
    return (
        <div className={classes.content}>
            <div>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>
            </div>
            <div>
                ava + description
            </div>

            <MyPosts />
        </div>

    );
};

