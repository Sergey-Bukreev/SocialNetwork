import React from 'react';
import  classes from "./Navbar.module.css";


export const Navbar:React.FC = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <a href={"/profile"} className={classes.item}>Profile</a>
            </div>
            <div>
                <a href={"/dialogs"} className={classes.item} >Messages</a>
            </div>
            <div>
                <a href={"#"} className={classes.item} >News</a>
            </div>
            <div>
                <a href={"#"} className={classes.item}>Music</a>
            </div>
            <div>
                <a href={"#"} className={classes.item}>Settings</a>
            </div>
        </nav>
    );
};

