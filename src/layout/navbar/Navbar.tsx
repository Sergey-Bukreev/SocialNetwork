import React from 'react';
import  classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar:React.FC = () => {
    return (
        <nav className={classes.nav} >

                <NavLink to={"/profile/30680"} className={classes.item} activeClassName={classes.active}>Profile</NavLink>


                <NavLink to={"/dialogs"} className={classes.item} activeClassName={classes.active} >Messages</NavLink>

                <NavLink to={"#"} className={classes.item}  >News</NavLink>

                <NavLink to={"#"} className={classes.item}>Music</NavLink>

                <NavLink to={"#"} className={classes.item}>Settings</NavLink>

                <NavLink to={"/users"} className={classes.item}  >Find Users</NavLink>

        </nav>
    );
};

