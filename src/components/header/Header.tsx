import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
export type HeaderPropsType = {
    isAuth:boolean,
    login:string
}
export const Header:React.FC<HeaderPropsType> = (props:HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&usqp=CAU"}/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}


            </div>
        </header>
    );
};

