import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCount: number
}
export const Post:React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Xg3wYI3jfMg5ozp9jhLd0JTORpfAqJkLA&usqp=CAU"}/>
            {props.message}
            <div>
                {props.likeCount}
                <span>Like</span>
            </div>
        </div>
    );
};

