import React from 'react';
import classes from "./ProfileInfo.module.css";


export const ProfileInfo:React.FC = () => {
    return (
        <div >
            <div className={classes.content}>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

