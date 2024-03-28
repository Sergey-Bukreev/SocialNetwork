
import React from 'react';
import classes from "./Users.module.css";
import {IUsers} from "../../redux/users-reducer/usersReducer";
import baseUserPhoto from "../../assets/images/baseUserPhoto.png";
import {NavLink} from "react-router-dom";



export type UsersPropsType = {
    totalUserCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (page: number) => void;
    usersData: IUsers[];
    followInProgress:number[]
    follow:(userId:number)=> void
    unfollow:(userId:number)=> void
};


export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount: number = Math.ceil(props.totalUserCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page =>
                    <span className={props.currentPage === page ? classes.selectedPage : ""}
                          onClick={() => { props.onPageChanged(page) }}
                    >
                        {page}
                    </span>
                )}
            </div>
            {props.usersData.map((user: IUsers) => (
                <div key={user.id}>
                    <span>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : baseUserPhoto} className={classes.userPhoto} />
                        </NavLink>

                        <div>
                            {user.followed
                                ? <button style={{ backgroundColor: props.followInProgress.some(id => id === user.id) ? 'gray' : 'white' }}
                                          disabled={props.followInProgress.some(id => id === user.id)}
                                          onClick={() => {props.unfollow(user.id)}}>
                                        Unfollow
                                    </button>
                                : <button style={{ backgroundColor: props.followInProgress.some(id => id === user.id) ? 'gray' : 'white' }}
                                    disabled={props.followInProgress.some(id => id === user.id)}
                                    onClick={() => {props.follow(user.id)}}>
                                        Follow
                                    </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div key={user.id}>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.followed ? 'Following' : 'Not Following'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
