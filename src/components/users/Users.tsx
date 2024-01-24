import React from 'react';
import classes from "./Users.module.css"
import axios from "axios";
import baseUserPhoto from "./../../assets/images/baseUserPhoto.png"
import {IUsers} from "../../redux/usersReducer";


export class Users extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            console.log(response)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
onPageChanged = (pageNumber:number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
        console.log(response)
        this.props.setUsers(response.data.items)
    })

}
    render() {
       let pagesCount:number = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages:number[] = []
        for( let i= 1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(page=>
                        <span className={this.props.currentPage === page ? classes.selectedPage : ""}
                        onClick={()=>{this.onPageChanged(page)}}
                        >
                            {page}
                        </span>
                    )}
                </div>
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