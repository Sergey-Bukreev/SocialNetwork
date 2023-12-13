import React from 'react';
import classes from "./MyPosts.module.css"
import {Post, PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    postsData:Array<PostPropsType>
    addPost:(postMessage:string)=>void


}
export const MyPosts:React.FC<MyPostsPropsType> = (props:MyPostsPropsType) => {

    let postElement:JSX.Element[] = props.postsData.map((el:PostPropsType) =><Post message={el.message} likeCount={el.likeCount}/>)

    let newPostElement:React.RefObject<any> = React.createRef()
    let addPost = (postMessage:any):void => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = "";
        
    }

    return (
        <div className={classes.postsBlock}>
           <h3>My Post</h3>
             <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                 <div>
                     <button onClick={addPost}>Add Post</button>
                 </div>

             </div>
                <div className={classes.posts}>
                    {postElement}
                 </div>
        </div>

    );
};

