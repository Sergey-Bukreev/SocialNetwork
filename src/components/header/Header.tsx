import React from 'react';
import classes from "./Header.module.css"

export const Header:React.FC = () => {
    return (
        <header className={classes.header}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&usqp=CAU"}/>
        </header>
    );
};

