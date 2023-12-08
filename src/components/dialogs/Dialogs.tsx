import React from 'react';
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
export const Dialogs:React.FC = () => {
    return (
        <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog}>
                       <NavLink to={"dialogs/1"}> Andrew </NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to={"dialogs/2"}> Victor </NavLink>
                    </div>
                    <div className={classes.dialog + " " + classes.active}>
                        <NavLink to={"dialogs/3"}> Dmitriy</NavLink>
                    </div>
                </div>

            <div className={classes.messages}>
                <div className={classes.message}>
                    helow
                </div>
                <div className={classes.message}>
                    how are you
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

