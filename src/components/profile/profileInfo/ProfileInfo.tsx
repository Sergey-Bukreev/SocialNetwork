import React from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";

export type ProfileInfoPropsType = {
    profile:any
}
export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props:ProfileInfoPropsType) => {
   if (!props.profile) {
       return <Preloader/>
   }
    return (
        <div >
            <div className={classes.content}>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava + description
            </div>
        </div>
    );
};

