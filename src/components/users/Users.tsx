import React from 'react';
import { Button } from 'antd';
import classes from "./Users.module.css"
import axios from "axios";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import baseUserPhoto from "./../../assets/images/baseUserPhoto.png"

type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {
if(props.usersPage.usersData.length === 0) {
    axios.get("http://social-network.samuraijs.com/api/1.0/users").then(response =>{
        props.setUsers(response.data.items)
    })
}
    return (
        <div>
            {props.usersPage.usersData.map((user) => (
                <div key={user.id}>
          <span>
            <img src={user.photoUrl !== null ? user.photoUrl : baseUserPhoto} className={classes.userPhoto} />
            <div>
              <Button name={'Follow'} onClick={() => {}} />
            </div>
          </span>
                    <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}, {user.location.country}</div>
              <div>{user.followed ? 'Following' : 'Not Following'}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};
