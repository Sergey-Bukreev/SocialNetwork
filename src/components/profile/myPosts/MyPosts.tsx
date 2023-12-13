import React from 'react';
import classes from "./MyPosts.module.css"
import {Post, PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    postsData:Array<PostPropsType>
    addPost:(postMessage:string)=>void
    updateNewPostText: (newText:string) => void
    newPostText: string


}
export const MyPosts:React.FC<MyPostsPropsType> = (props:MyPostsPropsType) => {

    let postElement:JSX.Element[] = props.postsData.map((el:PostPropsType) =><Post message={el.message} likeCount={el.likeCount}/>)

    let newPostElement:React.RefObject<any> = React.createRef()
    let addPost = ():void => {
        let text = newPostElement.current.value;
        props.addPost(text)

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
           <h3>My Post</h3>
             <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
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

