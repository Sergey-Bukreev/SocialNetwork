import React, {PropsWithChildren} from 'react';
import { Button } from 'antd';
import { UsersState} from '../../redux/usersReducer';
import classes from "./Users.module.css"
import {Dispatch, Action} from "redux";
type UsersPropsType = {
    appState: UsersState
    dispatch:Dispatch<Action>
};

export const Users: React.FC<UsersPropsType> = (props: UsersPropsType) => {

    return (
        <div>
            {props.appState.usersData.map((user) => (
                <div key={user.id}>
          <span>
            <img src={user.photoUrl} className={classes.userPhoto} />
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
