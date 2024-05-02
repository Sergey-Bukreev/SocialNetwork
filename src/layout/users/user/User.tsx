import React from 'react';
import {NavLink} from "react-router-dom";
import baseUserPhoto from "../../../assets/images/baseUserPhoto.png";
import classes from "../Users.module.css";
import {IUsers} from "../../../redux/users-reducer/usersReducer";
export type UserPropsType = {
    user :IUsers
    followInProgress:number[]
    follow:(userId:number)=> void
    unfollow:(userId:number)=> void
}
export const User = (props:UserPropsType) => {
    return (
        <div className={classes.userCard}>
                    <div className={classes.avatarBlock}>
                        <NavLink to={"/profile/" + props.user.id}>
                            <img src={props.user.photos.small !== null ? props.user.photos.small : baseUserPhoto} className={classes.userPhoto} />
                        </NavLink>
                        <div className={classes.userName}>
                            <span >{props.user.name.length > 8 ? props.user.name.slice(0, 8): props.user.name}</span>
                        </div>

                        <div className={classes.followStatus}>
                            <span>{props.user.followed ? 'Following' : 'Not Following'}</span>
                        </div>

                    </div>

                    {/*<div className={classes.userStatusBlock}>*/}
                    {/*    <span>{props.user.status? props.user.status.length > 22 ? props.user.status.slice(0, 22) : props.user.status : props.user.status}</span>*/}
                    {/*</div>*/}
            <div className={classes.userStatusBlock}>
                {props.user.status}
            </div>

                    <div className={classes.followButtonBlock}>
                            {props.user.followed
                                ? <button
                                    // style={{ backgroundColor: props.followInProgress.some(id => id === props.user.id) ? 'black' : 'white' }}
                                    className={classes.followButton}
                                    disabled={props.followInProgress.some(id => id === props.user.id)}
                                    onClick={() => {props.unfollow(props.user.id)}}>
                                    Unfollow
                                </button>
                                : <button
                                    // style={{ backgroundColor: props.followInProgress.some(id => id === props.user.id) ? 'gray' : 'white' }}
                                    className={classes.followButton}
                                    disabled={props.followInProgress.some(id => id === props.user.id)}
                                    onClick={() => {props.follow(props.user.id)}}>
                                    Follow
                                </button>
                            }
                    </div>

        </div>
    );
};

