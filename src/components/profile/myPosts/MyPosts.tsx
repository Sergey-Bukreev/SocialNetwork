import React from 'react';
import classes from "./MyPosts.module.css";
import { Post, PostPropsType } from "./Post/Post";
import { Action } from "redux";
import {addPostActionCreator, IPost, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

export type MyPostsPropsType = {
    postsData: IPost[];
    dispatch: (action: Action) => void;
    newPostText:string
};

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const postElement: JSX.Element[] = props.postsData.map((el: PostPropsType) => <Post message={el.message} likeCount={el.likeCount} />);

    const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = (): void => {
        let text = newPostElement.current?.value;
        if (text) {
            props.dispatch(addPostActionCreator());
        }
    };
    let onPostChange = (): void => {
        let text = newPostElement.current?.value;
        if (text) {
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    };

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
