import React from 'react';
import  classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar:React.FC = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={"/profile"} className={classes.item} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={"/dialogs"} className={classes.item} activeClassName={classes.active} >Messages</NavLink>
            </div>
            <div>
                <NavLink to={"#"} className={classes.item}  >News</NavLink>
            </div>
            <div>
                <NavLink to={"#"} className={classes.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={"#"} className={classes.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to={"/users"} className={classes.item}  >Find Users</NavLink>
            </div>
        </nav>
    );
};

