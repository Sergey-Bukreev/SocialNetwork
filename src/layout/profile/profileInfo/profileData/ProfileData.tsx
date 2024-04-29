import React from 'react';
import {ContactsType, UserProfileType} from "../../../../redux/profile-reducer/profileReducer";
import classes from "./../../Profile.module.css";
export type ProfileDataPropsType = {
    profile:UserProfileType
    isOwner:boolean
    goToEditMode: () => void
}
export const ProfileData:React.FC<ProfileDataPropsType> = (props:ProfileDataPropsType) => {
    return (
        <div className={classes.dataBlock}>

                {props.isOwner && <button className={classes.editButton} onClick={props.goToEditMode}>Edit Profile</button>}

            <div className={classes.dataBlockItem}>
                <b>Full Name: </b>
                <p>{props.profile.fullName}</p>
            </div>
            <div className={classes.dataBlockItem}>
                <b>Looking for a job: </b>
                <p>{props.profile.lookingForAJob ? "Yes" : "No"}</p>
            </div >
            <div className={classes.dataBlockItem}>
                <b>My Professional Skills: </b>
                <p>{props.profile.lookingForAJobDescription || "No Information"}</p>
            </div>
            <div className={classes.dataBlockItem}>
                <b>About Me:</b>
                <p>{props.profile.aboutMe || "No information"}</p>
            </div>
            <div className={classes.dataBlockSection}>
                <b>Contacts:</b>
                {props.profile.contacts &&
                    Object.entries(props.profile.contacts).map(([key, value]) => {
                        const title = key as string;
                        if (props.profile) {
                            return (
                                <Contacts
                                    key={key}
                                    title={title}
                                    value={value}
                                />
                            );
                        }
                        return null;
                    })}
            </div>

        </div>
    );
};
export const Contacts: React.FC<{ title: keyof ContactsType, value: string | null }> = ({ title, value }) => {
    return (
        <div className={classes.contactsItem}>
            <b>{title}: </b>
            {value}
        </div>
    );
};
