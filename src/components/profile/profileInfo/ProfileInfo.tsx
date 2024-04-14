import React, {ChangeEvent} from 'react';
import classes from "./ProfileInfo.module.css";
import {Preloader} from "../../common/preloader/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer/profileReducer";
import baseUserPhoto from "../../../assets/images/baseUserPhoto.png"

import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
export type ProfileInfoPropsType = {
    profile:UserProfileType | null
    status:string | null
    updateStatus:(statusText:string)=> void
    isOwner:boolean
    savePhoto: (file:File)=> void
}
export const ProfileInfo:React.FC<ProfileInfoPropsType> = (props:ProfileInfoPropsType) => {

   if (!props.profile) {
       return <Preloader/>
   }

   const onMainPhotoSelecct = (event:ChangeEvent<HTMLInputElement>) => {
       if(event.target && event.target.files && event.target.files.length) {
            props.savePhoto(event.target.files[0])
       }
   }

    return (
        <div >
            <div className={classes.content}>
                <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftarE3YPaoV8_i5f32nfJTBA39yUE_W_mBw&usqp=CAU"}/>

            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos?.large || baseUserPhoto} alt="avatar" />
                <p>{props.profile.fullName || "No name"}</p>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelecct}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

                <span>{props.profile.aboutMe || "No Information"}</span>
                <div>Looking for a job: <input type={"checkbox"} checked={props.profile.lookingForAJob}/></div>
            </div>
        </div>
    );
};

