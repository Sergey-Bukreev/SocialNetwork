import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "../Post/Post";


export const MyPosts:React.FC = () => {
    return (
        <div>
            My Post
             <div>
                <textarea></textarea>
                 <button>Add Post</button>
             </div>
                <div className={classes.posts}>
                    <Post message={"Hi, how are you"} likeCount={15} />
                    <Post  message={"Its my first post"} likeCount={20}/>
                    <Post message={"Have a good Time"} likeCount={22}/>
                 </div>
        </div>

    );
};

