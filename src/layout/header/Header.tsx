import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import baseUserPhoto from "./../../assets/images/baseUserPhoto.png"
import {Navbar} from "../navbar/Navbar";
export type HeaderPropsType = {
    isAuth:boolean,
    login:string
    photo:string | null
    logout:()=> void
    fullUserName: string
}
export const Header:React.FC<HeaderPropsType> = (props:HeaderPropsType) => {


    return (
        <header className={classes.header}>

            <div className={classes.userblock}>
                <img src={props.photo || baseUserPhoto}/>
                <span>{props.fullUserName}</span>
            </div>

           <div className={classes.title}>Ideal Community</div>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ?  <button onClick={()=>props.logout()}>Logout</button>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

