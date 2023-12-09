import React from 'react';
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts:React.FC = () => {

    let PostsData:{id:number, message:string, likeCount:number}[] = [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "Its my first post", likeCount: 25},
        {id: 3, message: "Have a good Time", likeCount: 22}
    ]

    let postElement = PostsData.map((el) =><Post message={el.message} likeCount={el.likeCount}/>)

    return (
        <div className={classes.postsBlock}>
           <h3>My Post</h3>
             <div>
                <div>
                    <textarea></textarea>
                </div>
                 <div>
                     <button>Add Post</button>
                 </div>

             </div>
                <div className={classes.posts}>
                    {postElement}
                 </div>
        </div>

    );
};

