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
        <div>
                    <span>
                        <NavLink to={"/profile/" + props.user.id}>
                            <img src={props.user.photos.small !== null ? props.user.photos.small : baseUserPhoto} className={classes.userPhoto} />
                        </NavLink>

                        <div>
                            {props.user.followed
                                ? <button style={{ backgroundColor: props.followInProgress.some(id => id === props.user.id) ? 'gray' : 'white' }}
                                          disabled={props.followInProgress.some(id => id === props.user.id)}
                                          onClick={() => {props.unfollow(props.user.id)}}>
                                    Unfollow
                                </button>
                                : <button style={{ backgroundColor: props.followInProgress.some(id => id === props.user.id) ? 'gray' : 'white' }}
                                          disabled={props.followInProgress.some(id => id === props.user.id)}
                                          onClick={() => {props.follow(props.user.id)}}>
                                    Follow
                                </button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div >{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{props.user.followed ? 'Following' : 'Not Following'}</div>
                        </span>
                    </span>
        </div>
    );
};

