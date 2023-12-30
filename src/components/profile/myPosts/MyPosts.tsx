import React from 'react';
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {IPost} from "../../../redux/profileReducer";
import {MapDispatchToPropsType, MapStateToPropsType} from "./MyPostsContainer";



export type MyPostsPropsType =  MapStateToPropsType & MapDispatchToPropsType

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const postElement: JSX.Element[] = props.profilePage.postsData.map((el: IPost) => (
        <Post key={el.id} message={el.message} likeCount={el.likeCount} />
    ));

    const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const onAddPost = (): void => {
        props.addPost();
    };

    const onPostChange = (): void => {
        if (newPostElement.current) {
            let text: string = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};
