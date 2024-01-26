import React from 'react';
import classes from "./Users.module.css";
import {IUsers} from "../../redux/usersReducer";
import baseUserPhoto from "../../assets/images/baseUserPhoto.png";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    totalUserCount:number
    pageSize:number
    currentPage:number
    onPageChanged: (page:number)=> void
    usersData:[]
}
export const Users = (props:UsersPropsType) => {

    let pagesCount:number = Math.ceil(props.totalUserCount / props.pageSize)
    let pages:number[] = []
    for( let i= 1; i<=pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page=>
                    <span className={props.currentPage === page ? classes.selectedPage : ""}
                          onClick={()=>{props.onPageChanged(page)}}
                    >
                            {page}
                        </span>
                )}
            </div>
            {props.usersData.map((user:IUsers) => (
                <div key={user.id}>
          <span>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : baseUserPhoto} className={classes.userPhoto} />
            </NavLink>

            <div>
              <button onClick={()=>{}}>Follow</button>
            </div>
          </span>
                    <span>
            <span>
              <div>{user.name}</div>
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

