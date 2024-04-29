
import React from 'react';
import {IUsers} from "../../redux/users-reducer/usersReducer";
import {Paginator} from "../../components/Paginator/paginator";
import {User} from "./user/User";

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
        <div>
            <Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            />
            {props.usersData.map((user: IUsers) => (
                <User user={user} followInProgress={props.followInProgress} follow={props.follow} unfollow={props.unfollow} />
            ))}
        </div>
    );
};
