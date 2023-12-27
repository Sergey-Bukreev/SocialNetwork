import React from 'react';
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {IPost, ProfileState} from "../../../redux/profileReducer";


export type MyPostsPropsType = {
    updateNewPostText: (text: string) => void;
    addPost: () => void;
    profilePage:ProfileState
};

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
