import React from 'react';
import classes from "./../MyPosts.module.css";

export type PostPropsType = {
    message: string
    likeCount: number
}
export const Post:React.FC<PostPropsType> = (props:PostPropsType) => {
    return (
        <div className={classes.postItem}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Xg3wYI3jfMg5ozp9jhLd0JTORpfAqJkLA&usqp=CAU"}/>
            {props.message}
            <div className={classes.likeCount}>
                {props.likeCount}
                <span>Like</span>
            </div>
        </div>
    );
};

