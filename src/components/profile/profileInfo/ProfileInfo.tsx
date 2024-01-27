import React from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {UserProfileType} from "../../../redux/profileReducer";
import baseUserPhoto from "../../../assets/images/baseUserPhoto.png"
export type ProfileInfoPropsType = {
    profile:UserProfileType | null
}
export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props:ProfileInfoPropsType) => {
  console.log(props)
   if (!props.profile) {
       return <Preloader/>
   }
    return (
        <div >
            <div className={classes.content}>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos?.small || baseUserPhoto} alt="avatar" />
                <p>{props.profile.fullName || "No name"}</p>
                <span>{props.profile.aboutMe || "No status"}</span>
                <div>Looking for a job: <input type={"checkbox"} checked={props.profile.lookingForAJob}/></div>
            </div>
        </div>
    );
};

