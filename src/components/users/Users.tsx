import React from 'react';
import classes from "./Users.module.css"
import axios from "axios";
import baseUserPhoto from "./../../assets/images/baseUserPhoto.png"
import {IUsers} from "../../redux/usersReducer";


export class Users extends React.Component<any, any>{
    getUsers = ()=> {

        if(this.props.usersPage.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                console.log(response)
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.usersPage.usersData.map((user:IUsers) => (
                    <div key={user.id}>
          <span>
            <img src={user.photos.small !== null ? user.photos.small : baseUserPhoto} className={classes.userPhoto} />
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
    }
}