
import React from 'react';
import {IUsers} from "../../redux/users-reducer/usersReducer";
import {Paginator} from "../../components/Paginator/paginator";
import {User} from "./user/User";
import classes from "./Users.module.css"

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

    return (
        <div className={classes.usersContainer}>
            <Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            />
            <div className={classes.userGrid}>
                {props.usersData.map((user: IUsers) => (
                    <User user={user} followInProgress={props.followInProgress} follow={props.follow} unfollow={props.unfollow} />
                ))}
            </div>
            <Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            />

        </div>
    );
};
