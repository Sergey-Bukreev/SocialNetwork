import React from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer/profileReducer";
import baseUserPhoto from "../../../assets/images/baseUserPhoto.png"
import ProfileStatus from "./profileStatus/ProfileStatus";
export type ProfileInfoPropsType = {
    profile:UserProfileType | null
    status:string | null
    updateStatus:(statusText:string)=> void
}
export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props:ProfileInfoPropsType) => {
  console.log(props)
   if (!props.profile) {
       return <Preloader/>
   }
    console.log(props.updateStatus)
    return (
        <div >
            <div className={classes.content}>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>

            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos?.small || baseUserPhoto} alt="avatar" />
                <p>{props.profile.fullName || "No name"}</p>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <span>{props.profile.aboutMe || "No Information"}</span>
                <div>Looking for a job: <input type={"checkbox"} checked={props.profile.lookingForAJob}/></div>
            </div>
        </div>
    );
};

