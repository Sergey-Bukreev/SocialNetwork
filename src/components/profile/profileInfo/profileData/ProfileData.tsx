import React from 'react';
import {ContactsType, UserProfileType} from "../../../../redux/profile-reducer/profileReducer";
export type ProfileDataPropsType = {
    profile:UserProfileType
    isOwner:boolean
    goToEditMode: () => void
}
export const ProfileData:React.FC<ProfileDataPropsType> = (props:ProfileDataPropsType) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}

            <div>
                <b>Full Name: </b>
                {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>
                {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>My Professional Skills: </b>
                {props.profile.lookingForAJobDescription || "No Information"}
            </div>
            <div>
                <b>About Me:</b>
                {props.profile.aboutMe || "No information"}
            </div>
            <div>
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
        <div>
            <b>{title}: </b>
            {value}
        </div>
    );
};
