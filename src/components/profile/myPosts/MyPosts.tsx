import React from 'react';
import classes from "./MyPosts.module.css"
import {Post, PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    postsData:Array<PostPropsType>
}
export const MyPosts:React.FC<MyPostsPropsType> = (props:MyPostsPropsType) => {

    let postElement = props.postsData.map((el) =><Post message={el.message} likeCount={el.likeCount}/>)

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

